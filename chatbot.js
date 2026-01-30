// Chatbot Q&A Database (Wempire specific)
const responses = {
    // Greetings
    "hello": "Hi! Welcome to WEMPIRE 👋 How can I assist you today?",
    "hi": "Hello! Welcome to WEMPIRE! Looking for something specific?",
    "hey": "Hey there! 👋 Need help finding the perfect outfit?",

    // Products
    "polo": "Our Wempire Polo collection is priced at ₹599. Available in Red, Black, Peach, and Sky Blue! 👔",
    "tshirt": "Our Standard Essential T-shirts are ₹399. Available in Rose Dust, Black, Cream, and Aqua! 👕",
    "t-shirt": "Our Standard Essential T-shirts are ₹399. Available in Rose Dust, Black, Cream, and Aqua! 👕",
    "shirt": "We have Polo shirts (₹599) and T-shirts (₹399). Which would you prefer?",
    "price": "Polo shirts: ₹599 | T-shirts: ₹399. All prices are final!",
    "product": "We sell premium Polo shirts and Essential T-shirts for men. What catches your eye?",

    // Colors
    "red": "Our Red Polo is a bestseller! ₹599. Want to know more?",
    "black": "We have Black Polo (₹599) and Black T-shirt (₹399). Both are timeless classics!",
    "blue": "Our Sky Blue Polo is perfect for summer! Only ₹599 😎",
    "color": "Polos: Red, Black, Peach, Sky Blue | T-shirts: Rose Dust, Black, Cream, Aqua",

    // Sizes
    "size": "We offer sizes: S, M, L, XL, XXL. Most items fit true to size!",
    "sizing": "Our sizing is standard. S=36, M=38, L=40, XL=42, XXL=44. Need help choosing?",

    // Delivery & Shipping
    "delivery": "Free delivery on orders above ₹999! Standard delivery takes 3-5 business days 📦",
    "shipping": "We ship across India! Free shipping on orders ₹999+. Delivery in 3-5 days ✈️",
    "ship": "Yes! We deliver pan-India. Free shipping on orders above ₹999!",
    "cod": "Yes! Cash on Delivery available. No extra charges 💰",

    // Returns & Exchange
    "return": "Easy 7-day return policy! No questions asked. Item should be unworn with tags 🔄",
    "exchange": "Free size exchange within 7 days! Just keep the tags on 😊",
    "refund": "Refunds processed within 5-7 business days after we receive the return.",

    // Contact & Support
    "contact": "📞 Call: +91-9876543210 | 📧 Email: support@wempire.com | We're here 9 AM - 6 PM",
    "phone": "Call us: +91-9876543210 (9 AM - 6 PM)",
    "email": "Email us: support@wempire.com - We reply within 24 hours!",
    "location": "We're based in Mumbai, India 📍",

    // Payment
    "payment": "We accept UPI, Cards, Wallets, Net Banking, and COD! 💳",
    "upi": "Yes! UPI payments accepted (Google Pay, PhonePe, Paytm)",

    // Stock & Availability
    "stock": "All items are in stock! Order now for quick delivery 🚀",
    "available": "Yes! All our products are currently available. Shop now!",

    // Help
    "help": "I can help with: Products, Sizes, Delivery, Returns, Payments. What do you need?",

    // Thanks & Goodbye
    "thank": "You're welcome! Happy shopping at WEMPIRE! 🛍️",
    "thanks": "My pleasure! Let me know if you need anything else!",
    "bye": "Goodbye! Come back soon! 👋 Happy shopping!",
    "goodbye": "Thank you for visiting WEMPIRE! See you soon! 😊"
};

// DOM Elements
const chatBtn = document.getElementById('chatBtn');
const chatWindow = document.getElementById('chatWindow');
const closeChat = document.getElementById('closeChat');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');
const chatBody = document.getElementById('chatBody');

// Toggle Chat Window
chatBtn.addEventListener('click', () => {
    chatWindow.classList.add('active');
    chatBtn.style.display = 'none';
});

closeChat.addEventListener('click', () => {
    chatWindow.classList.remove('active');
    chatBtn.style.display = 'block';
});

// Send Message Function
function sendMessage() {
    const message = userInput.value.trim();
    if (message === '') return;

    // Display user message
    addMessage(message, 'user');

    // Get bot response
    const reply = getBotReply(message);

    // Display bot response with slight delay
    setTimeout(() => {
        addMessage(reply, 'bot');
    }, 500);

    // Clear input
    userInput.value = '';
}

// Add Message to Chat
function addMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    messageDiv.innerHTML = `<p>${text}</p>`;
    chatBody.appendChild(messageDiv);

    // Auto scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;
}

// Get Bot Reply (Keyword Matching)
function getBotReply(input) {
    const lowerInput = input.toLowerCase();

    // Check for exact or partial keyword match
    for (let keyword in responses) {
        if (lowerInput.includes(keyword)) {
            return responses[keyword];
        }
    }

    // Default response if no match
    return "I'm not sure about that. Try asking about products, sizes, delivery, returns, or contact info! 😊";
}

// Event Listeners
sendBtn.addEventListener('click', sendMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});
