package com.example.demo.config;

import com.example.demo.model.Product;
import com.example.demo.model.Role;
import com.example.demo.model.User;
import com.example.demo.repository.ProductRepository;
import com.example.demo.repository.UserRepository;
import jakarta.annotation.PostConstruct;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataInitializer {
    private final UserRepository userRepository;
    private final ProductRepository productRepository;
    private final PasswordEncoder passwordEncoder;

    public DataInitializer(UserRepository userRepository, ProductRepository productRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.productRepository = productRepository;
        this.passwordEncoder = passwordEncoder;
    }

    @PostConstruct
    public void init() {
        User user1 = new User("Dragana",  "Trifunova",   "dtrifunova",   passwordEncoder.encode("dtrifunova"),   Role.ROLE_ADMIN);
        User user2 = new User("Milena",   "Janeva",      "mjaneva",      passwordEncoder.encode("mjaneva"),      Role.ROLE_ADMIN);
        User user3 = new User("Marija",   "Cvetanovska", "mcvetanovska", passwordEncoder.encode("mcvetanovska"), Role.ROLE_CUSTOMER);
        User user4 = new User("Ben",      "Affleck",     "baffleck",     passwordEncoder.encode("baffleck"),     Role.ROLE_OWNER);

        this.userRepository.save(user1);
        this.userRepository.save(user2);
        this.userRepository.save(user3);
        this.userRepository.save(user4);

        // ── Product 1 — Granny Smith Apple ──
        // 4 local + 3 Unsplash (green apples)
        List<String> product1_images = new ArrayList<>();
        product1_images.add("/media/jabolka2.jpg");
        product1_images.add("/media/jabolka3.jpg");
        product1_images.add("/media/jabolka.jpg");
        product1_images.add("/media/jabolki.jpg");
        product1_images.add("https://images.unsplash.com/photo-1602595366984-709ba7028122?w=1200&q=80");

        // ── Product 2 — Ajdaret Apple ──
        // 1 local + 3 Unsplash (red apples)
        List<String> product2_images = new ArrayList<>();
        product2_images.add("/media/jabolka1.jpg");
        product2_images.add("https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?w=1200&q=80");
        product2_images.add("https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=1200&q=80");

        // ── Product 3 — Apple Madzun ──
        // 1 local + 2 Unsplash (jam jars)
        List<String> product3_images = new ArrayList<>();
        product3_images.add("/media/madzun.jpg");

        // ── Product 4 — Apple Juice ──
        // 2 local + 2 Unsplash (juice / drinks)
        List<String> product4_images = new ArrayList<>();
        product4_images.add("/media/sok.jpg");
        product4_images.add("/media/sok1.jpg");

        // ── Product 5 — Family Shop Bundle ──
        // All Unsplash — verified shots showing apples + juice/jar together in one image
        List<String> product5_images = new ArrayList<>();
        // plate of apples + glass of apple juice together (verified)
        product5_images.add("https://images.unsplash.com/photo-1716834092653-bf887f1f29d6?w=1200&q=80");

        // ── Feature lists ──
        List<String> featureListOne = new ArrayList<>();
        featureListOne.add("Crisp and firm texture");
        featureListOne.add("Naturally tart and refreshing taste");
        featureListOne.add("Bright green skin with high freshness quality");
        featureListOne.add("Ideal for baking, salads, and healthy snacks");

        List<String> featureListTwo = new ArrayList<>();
        featureListTwo.add("Deep red skin with a rich, glossy finish");
        featureListTwo.add("Sweet flavor with a satisfying crunch");
        featureListTwo.add("Hand-picked fresh from our Prespa orchards");
        featureListTwo.add("Great for snacking, baking, and fresh juices");

        List<String> featureListThree = new ArrayList<>();
        featureListThree.add("Traditional handmade apple madzun");
        featureListThree.add("Made with a classic family recipe");
        featureListThree.add("Rich, naturally sweet flavor with no additives");
        featureListThree.add("Perfect spread for breakfast or dessert");

        List<String> featureListFour = new ArrayList<>();
        featureListFour.add("Freshly pressed from our own apples");
        featureListFour.add("100% natural, no added sugar or preservatives");
        featureListFour.add("Rich in vitamins and natural sweetness");
        featureListFour.add("Great for breakfast or as a refreshing drink");

        List<String> featureListFive = new ArrayList<>();
        featureListFive.add("A curated bundle of our best apple products");
        featureListFive.add("Perfect for sharing with family and friends");
        featureListFive.add("Great value compared to buying separately");
        featureListFive.add("A thoughtful gift for any occasion");

        // ── Products ──
        Product product1 = new Product("Granny Smith Apple", 100,
                "Granny Smith apples are crisp, firm, and known for their bright green skin and sharp tart flavor. They are perfect for baking, salads, or eating fresh if you enjoy a refreshing sour-sweet taste.",
                300, product1_images, featureListOne);

        Product product2 = new Product("Ajdaret Apple", 100,
                "Ajdaret apples are sweet, deep red apples hand-picked fresh from our orchards in Prespa. With their rich color and satisfying crunch, they are perfect for snacking, baking, or making fresh juice.",
                280, product2_images, featureListTwo);

        Product product3 = new Product("Apple Madzun", 180,
                "Apple Madzun is a traditional handmade apple spread made following our family's classic recipe. Naturally sweet and rich in flavor, it's perfect for breakfast, dessert, or enjoyed straight from the jar.",
                150, product3_images, featureListThree);

        Product product4 = new Product("Apple Juice", 150,
                "Our Apple Juice is freshly pressed from apples grown in our own orchards, with no added sugar or preservatives. Naturally sweet and rich in vitamins, it's the perfect refreshing drink for any time of day.",
                250, product4_images, featureListFour);

        Product product5 = new Product("Family Shop Bundle", 450,
                "The Family Shop Bundle brings together our favorite apple products in one set — fresh apples, homemade madzun, and apple juice. A great way to enjoy everything we offer, and a thoughtful gift for the ones you love.",
                100, product5_images, featureListFive);

        product2.setDiscount(10);

        this.productRepository.save(product1);
        this.productRepository.save(product2);
        this.productRepository.save(product3);
        this.productRepository.save(product4);
        this.productRepository.save(product5);
    }
}