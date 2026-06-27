import java.util.*;

public class WardShiftSummary {

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

        Map<String, Integer> wardMinNurses = new LinkedHashMap<>();
        Map<String, List<int[]>> wardShifts = new LinkedHashMap<>();
        List<String> wards = new ArrayList<>();

        int badShifts = 0;
        int idx = 0;

        while (idx < lines.size()) {
            String curr = lines.get(idx).trim();

            if (curr.equals("WARD")) {
                idx++;
                String[] w = lines.get(idx).trim().split("\\|");
                String wName = w[0];
                int wMin = Integer.parseInt(w[1]);
                if (!wardMinNurses.containsKey(wName)) {
                    wards.add(wName);
                    wardMinNurses.put(wName, wMin);
                    wardShifts.put(wName, new ArrayList<>());
                }
                idx++;

            } else if (curr.equals("NURSE")) {
                idx++;
                String[] n = lines.get(idx).trim().split("\\|");
                String sen = n[2];
                String wrd = n[3];
                String[] st = n[4].split(":");
                String[] et = n[5].split(":");

                int sMin = Integer.parseInt(st[0]) * 60 + Integer.parseInt(st[1]);
                int eMin = Integer.parseInt(et[0]) * 60 + Integer.parseInt(et[1]);

                if (!wardShifts.containsKey(wrd)) {
                    System.out.println("Exception: Illegal Ward provided.");
                    return;
                }

                if (sMin >= eMin) {
                    badShifts++;
                } else {
                    int senior = sen.equals("SENIOR") ? 1 : 0;
                    wardShifts.get(wrd).add(new int[]{sMin, eMin, senior});
                }
                idx++;

            } else {
                idx++;
            }
        }

        for (String w : wards) {
            int minReq = wardMinNurses.get(w);
            List<int[]> shifts = wardShifts.get(w);
            int total = shifts.size();

            int totalMins = 0;
            for (int[] s : shifts) {
                totalMins += s[1] - s[0];
            }

            int h = totalMins / 60;
            int m = totalMins % 60;

            String status;
            if (total < minReq) {
                status = "UNDERSTAFFED";
            } else {
                boolean morningSen = false, eveningSen = false;
                boolean hasMorn = false, hasEven = false;

                for (int[] s : shifts) {
                    if (s[0] / 60 < 14) {
                        hasMorn = true;
                        if (s[2] == 1) morningSen = true;
                    } else {
                        hasEven = true;
                        if (s[2] == 1) eveningSen = true;
                    }
                }

                if ((hasMorn&&!morningSen) || (hasEven && !eveningSen)) {
                    status = "UNSUPERVISED";
                } else {
                    status = "OK";
                }
            }

            if (m == 0) {
                System.out.println(w + " { nurses=" + total + " || hours=" + h + " || status=" + status + " }");
            } else {
                System.out.println(w + " { nurses=" + total + " || hours=" + h + " || minutes=" + m + " || status=" + status + " }");
            }
        }

        if(badShifts > 0) {
            System.out.println("META { invalidShifts=" + badShifts + " }");
        }
    }
}