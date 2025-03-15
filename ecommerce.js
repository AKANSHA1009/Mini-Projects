// --- Encapsulation, Abstraction: Product Class ---
class Product {
    #id;
    #name;
    #price;
    #stock;

    constructor(id, name, price, stock) {
        this.#id = id;
        this.#name = name;
        this.#price = price;
        this.#stock = stock;
    }

    // Public getter methods to access private fields (Encapsulation)
    getId() {
        return this.#id;
    }

    getName() {
        return this.#name;
    }

    getPrice() {
        return this.#price;
    }

    getStock() {
        return this.#stock;
    }

    // Method to decrease stock when an item is added to cart (Encapsulation)
    reduceStock(quantity) {
        if (this.#stock >= quantity) {
            this.#stock -= quantity;
            return true;
        }
        return false; // Insufficient stock
    }

    // Method for product description (Abstraction)
    getDescription() {
        return `${this.#name} - $${this.#price}`;
    }
}

// --- Inheritance: DigitalProduct Class (inherits from Product) ---
class DigitalProduct extends Product {
    constructor(id, name, price, stock, fileSize) {
        super(id, name, price, stock);  // Call parent class constructor
        this.fileSize = fileSize; // Additional property for digital products
    }

    // Overriding getDescription method to include file size (Polymorphism)
    getDescription() {
        return `${super.getDescription()} - File size: ${this.fileSize}MB`;
    }

    // Method to simulate digital product download (Abstraction)
    download() {
        console.log(`Downloading ${this.getName()}...`);
    }
}

// --- ShoppingCart Class ---
class ShoppingCart {
    constructor() {
        this.cartItems = []; // Encapsulation: Array to hold cart items
    }

    // Method to add a product to the cart (Abstraction)
    addItem(product, quantity) {
        const existingItem = this.cartItems.find(item => item.product.getId() === product.getId());
        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.cartItems.push({ product, quantity });
        }
    }

    // Method to remove a product from the cart (Encapsulation)
    removeItem(productId) {
        this.cartItems = this.cartItems.filter(item => item.product.getId() !== productId);
    }

    // Method to display the cart (Abstraction)
    displayCart() {
        console.log("Shopping Cart:");
        this.cartItems.forEach(item => {
            console.log(`${item.product.getName()} - $${item.product.getPrice()} x ${item.quantity}`);
        });
    }

    // Calculate total price of the cart (Abstraction)
    calculateTotal() {
        return this.cartItems.reduce((total, item) => total + (item.product.getPrice() * item.quantity), 0);
    }

    // Check out and simulate payment process (Abstraction)
    checkout() {
        const total = this.calculateTotal();
        console.log(`Your total is $${total}. Proceeding to payment...`);
        this.cartItems.forEach(item => {
            item.product.reduceStock(item.quantity); // Reduce stock after purchase
        });
        this.cartItems = []; // Empty cart after checkout
        console.log("Order placed successfully!");
    }
}

// --- Order Class ---
class Order {
    constructor(cart, user) {
        this.orderId = Math.floor(Math.random() * 1000000);
        this.cart = cart;
        this.user = user;
        this.status = "Processing";
    }

    // Method to simulate order processing (Abstraction)
    processOrder() {
        console.log(`Order #${this.orderId} is being processed for ${this.user.getName()}.`);
        this.cart.checkout();
        this.status = "Completed";
        console.log(`Order #${this.orderId} has been completed.`);
    }

    // Method to view order status (Abstraction)
    getOrderStatus() {
        console.log(`Order #${this.orderId} status: ${this.status}`);
    }
}

// --- User Class ---
class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    // Getter for user name (Encapsulation)
    getName() {
        return this.name;
    }

    // Getter for user email (Encapsulation)
    getEmail() {
        return this.email;
    }
}

// --- Main Program: Using all classes together ---
const laptop = new Product(1, "Laptop", 999.99, 10);
const headphones = new DigitalProduct(2, "Headphones", 199.99, 20, 1.5);

const user1 = new User("John Doe", "johndoe@example.com");
const cart1 = new ShoppingCart();

cart1.addItem(laptop, 1);
cart1.addItem(headphones, 2);
cart1.displayCart();

const order1 = new Order(cart1, user1);
order1.processOrder();  // Process the order

// Polymorphism demonstration (download digital product)
headphones.download();
