import java.util.*;

public class PatientVitalsAnalyzer {

    public static List<String> readInput() {
        final Scanner scan = new Scanner(System.in);
        final List<String> items = new ArrayList<>();

        while (scan.hasNextLine()) {
            items.add(scan.nextLine());
        }

        return items;
    }

    public static void main(String[] args) {
        final List<String> lines = readInput();

        Map<String, List<long[]>> patients = new LinkedHashMap<>();

        for(int i = 0; i < lines.size(); i++){
            String line = lines.get(i);
            String[] parts = line.split(" ");

            try {
                String patId = "P" + String.format("%03d", Integer.parseInt(parts[0]));
                long time = Long.parseLong(parts[1]);
                long heartR = Long.parseLong(parts[2]);
                long syst = Long.parseLong(parts[3]);
                long diast = Long.parseLong(parts[4]);

                if(patients.get(patId) == null){
                    patients.put(patId, new ArrayList<>());
                }
                long[] reading = {time, heartR, syst, diast};
                patients.get(patId).add(reading);
            } catch(Exception e){
                System.out.println("Invalid input format on line " + (i+1) + ": " + line);
                return;
            }
        }

        List<String> patIds = new ArrayList<>(patients.keySet());

        for(int i = 0; i < patIds.size(); i++){
            List<long[]> reads = patients.get(patIds.get(i));
            for(int j = 0; j < reads.size()-1; j++){
                for(int k = j+1; k < reads.size(); k++){
                    if(reads.get(k)[0] < reads.get(j)[0]){
                        long[] tmp = reads.get(j);
                        reads.set(j, reads.get(k));
                        reads.set(k, tmp);
                    }
                }
            }
        }

        int[] totalStreaks = new int[patIds.size()];
        int[] longestNorm = new int[patIds.size()];
        double[] severity = new double[patIds.size()];

        for(int p = 0; p < patIds.size(); p++){
            List<long[]> reads = patients.get(patIds.get(p));

            int streakCount = 0;
            int normRun = 0;
            int bestNorm = 0;
            int abCount = 0;
            long prevTs = -1;
            boolean inStreak = false;
            double sev = 0;

            for(int i = 0; i < reads.size(); i++){
                long ts = reads.get(i)[0];
                long hr = reads.get(i)[1];
                long sys = reads.get(i)[2];
                long dia = reads.get(i)[3];

                boolean isAb = false;
                double diff = 0;

                if(hr < 60){ diff += (60-hr); isAb = true; }
                else if(hr > 100){ diff += (hr-100); isAb = true; }

                if(sys < 90){ diff += (90-sys); isAb = true; }
                else if(sys > 140){ diff += (sys-140); isAb = true; }

                if(dia < 60){ diff += (60-dia); isAb = true; }
                else if(dia > 90){ diff += (dia-90); isAb = true; }

                if(isAb){
                    sev += diff;
                    normRun = 0;

                    if(prevTs == -1 || (ts - prevTs) >= 500){
                        if(inStreak&&abCount >= 3) streakCount++;
                        abCount = 1;
                        inStreak = true;
                    } else {
                        abCount++;
                    }
                    prevTs = ts;
                } else {
                    if(inStreak && abCount >= 3) streakCount++;
                    inStreak = false;
                    abCount = 0;
                    prevTs = -1;
                    normRun++;
                    if(normRun > bestNorm) bestNorm = normRun;
                }
            }
            if(inStreak && abCount >= 3) streakCount++;

            totalStreaks[p] = streakCount;
            longestNorm[p] = bestNorm;
            severity[p] = sev;
        }

        for(int i = 0; i < patIds.size()-1; i++){
            for(int j = i+1; j < patIds.size(); j++){
                boolean swap = false;
                if(totalStreaks[j] > totalStreaks[i]) swap = true;
                else if(totalStreaks[j] == totalStreaks[i] && severity[j] > severity[i]) swap = true;

                if(swap){
                    int tmp1 = totalStreaks[i]; totalStreaks[i] = totalStreaks[j]; totalStreaks[j] = tmp1;
                    int tmp2 = longestNorm[i]; longestNorm[i] = longestNorm[j]; longestNorm[j] = tmp2;
                    double tmp3 = severity[i]; severity[i] = severity[j]; severity[j] = tmp3;
                    String tmp4 = patIds.get(i); patIds.set(i, patIds.get(j)); patIds.set(j, tmp4);
                }
            }
        }

        System.out.println("==========================================================");
        System.out.println("           PATIENT VITALS ANOMALY REPORT");
        System.out.println("==========================================================");
        for(int i = 0; i < patIds.size(); i++){
            System.out.printf("#%d | Patient: %s | Streaks: %d | Longest Normal: %d | Severity: %.2f%n",
                    i+1, patIds.get(i), totalStreaks[i], longestNorm[i], severity[i]);
        }
        System.out.println("==========================================================");
    }
}