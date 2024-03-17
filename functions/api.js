
class Vehicle {

    constructor(type, from, to, dist, comfirtLevel) {
        this.id = Math.floor(Math.random() * 1000);
        this.type = type;
        this.from = from;
        this.to = to;
        this.dist = dist;
        this.comfirtLevel = comfirtLevel;
        this.price = this.getPrice;
    }

    get getType() {
        return this.type;
    }

    set setType(type) {
        this.type = type;
    }

    get getPrice() {
        let price = Infinity;
        if (this.comfirtLevel == "GENERAL") {
            if (this.type == "TRAIN")
                price = this.dist * 1;
            else if (this.type == "BUS")
                price = this.dist * 1.5;
            else if (this.type == "PLANE")
                price = this.dist * 10;
        }
        else if (this.comfirtLevel == "PROFESSIONAL") {
            if (this.type == "TRAIN")
                price = this.dist * 4;
            else if (this.type == "BUS")
                price = this.dist * 5;
            else if (this.type == "PLANE")
                price = this.dist * 15;
        }
        else if (this.comfirtLevel == "EXECUTIVE") {
            if (this.type == "TRAIN")
                price = this.dist * 8;
            else if (this.type == "BUS")
                price = this.dist * 10;
            else if (this.type == "PLANE")
                price = this.dist * 20;
        }
        return price;
    }
}

let vehicles = [
    new Vehicle("TRAIN", "Mumbai", "Delhi", 1500, "GENERAL"),
    new Vehicle("BUS", "New York", "Washington", 300, "PROFESSIONAL"),
    new Vehicle("PLANE", "London", "Paris", 500, "EXECUTIVE")
];

const citiesData = {
    "Andhra Pradesh": {
        "Hyderabad": { "latitude": 17.3850, "longitude": 78.4867 },
        "Visakhapatnam": { "latitude": 17.6868, "longitude": 83.2185 },
        "Vijayawada": { "latitude": 16.5062, "longitude": 80.6480 },
        "Guntur": { "latitude": 16.3067, "longitude": 80.4365 },
        "Tirupati": { "latitude": 13.6288, "longitude": 79.4192 }
    },
    "Maharashtra": {
        "Mumbai": { "latitude": 19.0760, "longitude": 72.8777 },
        "Pune": { "latitude": 18.5204, "longitude": 73.8567 },
        "Nagpur": { "latitude": 21.1458, "longitude": 79.0882 },
        "Nashik": { "latitude": 19.9975, "longitude": 73.7898 },
        "Aurangabad": { "latitude": 19.8762, "longitude": 75.3433 }
    },
    "Karnataka": {
        "Bangalore": { "latitude": 12.9716, "longitude": 77.5946 },
        "Mysore": { "latitude": 12.2958, "longitude": 76.6394 },
        "Hubli": { "latitude": 15.3647, "longitude": 75.1240 },
        "Mangalore": { "latitude": 12.9141, "longitude": 74.8560 },
        "Belgaum": { "latitude": 15.8497, "longitude": 74.4977 }
    },
    "Tamil Nadu": {
        "Chennai": { "latitude": 13.0827, "longitude": 80.2707 },
        "Coimbatore": { "latitude": 11.0168, "longitude": 76.9558 },
        "Madurai": { "latitude": 9.9252, "longitude": 78.1198 },
        "Tiruchirappalli": { "latitude": 10.7905, "longitude": 78.7047 },
        "Salem": { "latitude": 11.6643, "longitude": 78.1460 }
    },
    "Uttar Pradesh": {
        "Lucknow": { "latitude": 26.8467, "longitude": 80.9462 },
        "Kanpur": { "latitude": 26.4499, "longitude": 80.3319 },
        "Varanasi": { "latitude": 25.3176, "longitude": 82.9739 },
        "Agra": { "latitude": 27.1767, "longitude": 78.0081 },
        "Allahabad": { "latitude": 25.4358, "longitude": 81.8463 }
    },
    "Rajasthan": {
        "Jaipur": { "latitude": 26.9124, "longitude": 75.7873 },
        "Jodhpur": { "latitude": 26.2389, "longitude": 73.0243 },
        "Udaipur": { "latitude": 24.5854, "longitude": 73.7125 },
        "Kota": { "latitude": 25.2138, "longitude": 75.8648 },
        "Ajmer": { "latitude": 26.4499, "longitude": 74.6399 }
    },
    "West Bengal": {
        "Kolkata": { "latitude": 22.5726, "longitude": 88.3639 },
        "Howrah": { "latitude": 22.5882, "longitude": 88.3235 },
        "Durgapur": { "latitude": 23.5204, "longitude": 87.3119 },
        "Siliguri": { "latitude": 26.7271, "longitude": 88.3953 },
        "Asansol": { "latitude": 23.6739, "longitude": 86.9524 }
    },
    "Bihar": {
        "Patna": { "latitude": 25.5941, "longitude": 85.1376 },
        "Gaya": { "latitude": 24.7964, "longitude": 85.0076 },
        "Bhagalpur": { "latitude": 25.2445, "longitude": 86.9718 },
        "Muzaffarpur": { "latitude": 26.1209, "longitude": 85.3647 },
        "Purnia": { "latitude": 25.7776, "longitude": 87.4753 }
    },
    "Gujarat": {
        "Ahmedabad": { "latitude": 23.0225, "longitude": 72.5714 },
        "Surat": { "latitude": 21.1702, "longitude": 72.8311 },
        "Vadodara": { "latitude": 22.3072, "longitude": 73.1812 },
        "Rajkot": { "latitude": 22.3039, "longitude": 70.8022 },
        "Gandhinagar": { "latitude": 23.2156, "longitude": 72.6369 }
    },
    "Madhya Pradesh": {
        "Indore": { "latitude": 22.7196, "longitude": 75.8577 },
        "Bhopal": { "latitude": 23.2599, "longitude": 77.4126 },
        "Jabalpur": { "latitude": 23.1815, "longitude": 79.9864 },
        "Gwalior": { "latitude": 26.2183, "longitude": 78.1828 },
        "Ujjain": { "latitude": 23.1765, "longitude": 75.7885 }
    },
    "Kerala": {
        "Thiruvananthapuram": { "latitude": 8.5241, "longitude": 76.9366 },
        "Kochi": { "latitude": 9.9312, "longitude": 76.2673 },
        "Kozhikode": { "latitude": 11.2588, "longitude": 75.7804 },
        "Thrissur": { "latitude": 10.5276, "longitude": 76.2144 },
        "Kollam": { "latitude": 8.8932, "longitude": 76.6141 }
    },
    "Telangana": {
        "Hyderabad": { "latitude": 17.3850, "longitude": 78.4867 },
        "Warangal": { "latitude": 17.9784, "longitude": 79.6006 },
        "Nizamabad": { "latitude": 18.6767, "longitude": 78.1000 },
        "Karimnagar": { "latitude": 18.4392, "longitude": 79.1288 },
        "Khammam": { "latitude": 17.2477, "longitude": 80.1514 }
    },
    "Punjab": {
        "Ludhiana": { "latitude": 30.9000, "longitude": 75.8573 },
        "Amritsar": { "latitude": 31.6340, "longitude": 74.8723 },
        "Jalandhar": { "latitude": 31.3260, "longitude": 75.5762 },
        "Patiala": { "latitude": 30.3398, "longitude": 76.3869 },
        "Bathinda": { "latitude": 30.2110, "longitude": 74.9455 }
    },
    "Haryana": {
        "Gurgaon": { "latitude": 28.4595, "longitude": 77.0266 },
        "Faridabad": { "latitude": 28.4089, "longitude": 77.3178 },
        "Panipat": { "latitude": 29.3919, "longitude": 76.9796 },
        "Ambala": { "latitude": 30.3753, "longitude": 76.7821 },
        "Karnal": { "latitude": 29.6857, "longitude": 76.9905 }
    },
    "Assam": {
        "Guwahati": { "latitude": 26.1445, "longitude": 91.7362 },
        "Silchar": { "latitude": 24.8333, "longitude": 92.7797 },
        "Dibrugarh": { "latitude": 27.4728, "longitude": 94.9119 },
        "Jorhat": { "latitude": 26.7517, "longitude": 94.2167 },
        "Nagaon": { "latitude": 26.3487, "longitude": 92.6840 }
    },
    "Odisha": {
        "Bhubaneswar": { "latitude": 20.2961, "longitude": 85.8245 },
        "Cuttack": { "latitude": 20.4625, "longitude": 85.8828 },
        "Puri": { "latitude": 19.8134, "longitude": 85.8256 },
        "Rourkela": { "latitude": 22.2604, "longitude": 84.8536 },
        "Berhampur": { "latitude": 19.3115, "longitude": 84.7929 }
    },
    "Jharkhand": {
        "Ranchi": { "latitude": 23.3441, "longitude": 85.3096 },
        "Jamshedpur": { "latitude": 22.8056, "longitude": 86.2029 },
        "Dhanbad": { "latitude": 23.7957, "longitude": 86.4304 },
        "Bokaro": { "latitude": 23.6693, "longitude": 86.1511 },
        "Deoghar": { "latitude": 24.4826, "longitude": 86.6986 }
    },
    "Chhattisgarh": {
        "Raipur": { "latitude": 21.2514, "longitude": 81.6296 },
        "Bhilai": { "latitude": 21.1900, "longitude": 81.2849 },
        "Bilaspur": { "latitude": 22.0797, "longitude": 82.1396 },
        "Korba": { "latitude": 22.3511, "longitude": 82.6865 },
        "Durg": { "latitude": 21.1905, "longitude": 81.2849 }
    },
    "Uttarakhand": {
        "Dehradun": { "latitude": 30.3165, "longitude": 78.0322 },
        "Haridwar": { "latitude": 29.9457, "longitude": 78.1642 },
        "Rishikesh": { "latitude": 30.0869, "longitude": 78.2676 },
        "Nainital": { "latitude": 29.3805, "longitude": 79.4630 },
        "Mussoorie": { "latitude": 30.4599, "longitude": 78.0661 }
    },
    "Himachal Pradesh": {
        "Shimla": { "latitude": 31.1048, "longitude": 77.1734 },
        "Dharamshala": { "latitude": 32.2190, "longitude": 76.3234 },
        "Manali": { "latitude": 32.2396, "longitude": 77.1887 },
        "Kullu": { "latitude": 31.9566, "longitude": 77.1095 },
        "Mandi": { "latitude": 31.7804, "longitude": 76.9835 }
    },
    "Goa": {
        "Panaji": { "latitude": 15.4909, "longitude": 73.8278 },
        "Margao": { "latitude": 15.2750, "longitude": 73.9585 },
        "Vasco da Gama": { "latitude": 15.3969, "longitude": 73.8157 },
        "Mapusa": { "latitude": 15.5914, "longitude": 73.8186 },
        "Ponda": { "latitude": 15.4013, "longitude": 74.0158 }
    },
    "Arunachal Pradesh": {
        "Itanagar": { "latitude": 27.0844, "longitude": 93.6053 },
        "Naharlagun": { "latitude": 27.1004, "longitude": 93.6950 },
        "Pasighat": { "latitude": 28.0665, "longitude": 95.3278 },
        "Tawang": { "latitude": 27.5883, "longitude": 91.8509 },
        "Ziro": { "latitude": 27.5582, "longitude": 93.8287 }
    },
    "Manipur": {
        "Imphal": { "latitude": 24.8170, "longitude": 93.9368 },
        "Thoubal": { "latitude": 24.6342, "longitude": 94.0187 },
        "Bishnupur": { "latitude": 24.6036, "longitude": 93.7155 },
        "Churachandpur": { "latitude": 24.3334, "longitude": 93.6712 },
        "Ukhrul": { "latitude": 25.1796, "longitude": 94.3256 }
    },
    "Meghalaya": {
        "Shillong": { "latitude": 25.5788, "longitude": 91.8933 },
        "Tura": { "latitude": 25.5198, "longitude": 90.2203 },
        "Jowai": { "latitude": 25.5250, "longitude": 92.6367 },
        "Nongpoh": { "latitude": 25.9045, "longitude": 91.8825 },
        "Baghmara": { "latitude": 25.4589, "longitude": 90.5708 }
    },
    "Tripura": {
        "Agartala": { "latitude": 23.8315, "longitude": 91.2868 },
        "Dharmanagar": { "latitude": 24.3665, "longitude": 92.1655 },
        "Udaipur": { "latitude": 23.5351, "longitude": 91.4772 },
        "Belonia": { "latitude": 23.2547, "longitude": 91.4532 },
        "Ambassa": { "latitude": 23.2343, "longitude": 91.2600 }
    },
    "Nagaland": {
        "Kohima": { "latitude": 25.6747, "longitude": 94.1100 },
        "Dimapur": { "latitude": 25.9060, "longitude": 93.7315 },
        "Mokokchung": { "latitude": 26.3265, "longitude": 94.5300 },
        "Tuensang": { "latitude": 26.2762, "longitude": 94.8225 },
        "Wokha": { "latitude": 26.1035, "longitude": 94.2637 }
    },
    "Sikkim": {
        "Gangtok": { "latitude": 27.3389, "longitude": 88.6065 },
        "Namchi": { "latitude": 27.1659, "longitude": 88.3654 },
        "Gyalshing": { "latitude": 27.2887, "longitude": 88.2273 },
        "Singtam": { "latitude": 27.2302, "longitude": 88.5064 },
        "Mangan": { "latitude": 27.5098, "longitude": 88.5284 }
    },
    "Mizoram": {
        "Aizawl": { "latitude": 23.7271, "longitude": 92.7176 },
        "Lunglei": { "latitude": 22.8772, "longitude": 92.7302 },
        "Saiha": { "latitude": 22.4814, "longitude": 92.9805 },
        "Champhai": { "latitude": 23.4763, "longitude": 93.3291 },
        "Kolasib": { "latitude": 24.3120, "longitude": 92.6768 }
    },
    "Andaman and Nicobar Islands": {
        "Port Blair": { "latitude": 11.6234, "longitude": 92.7265 },
        "Car Nicobar": { "latitude": 9.1844, "longitude": 92.8196 },
        "Mayabunder": { "latitude": 12.9246, "longitude": 92.8610 },
        "Diglipur": { "latitude": 13.2621, "longitude": 92.9820 },
        "Havelock Island": { "latitude": 11.9733, "longitude": 93.0120 }
    },
    "Puducherry": {
        "Puducherry": { "latitude": 11.9139, "longitude": 79.8145 },
        "Karaikal": { "latitude": 10.9254, "longitude": 79.8380 },
        "Mahe": { "latitude": 11.7075, "longitude": 75.5337 },
        "Yanam": { "latitude": 16.7319, "longitude": 82.2202 },
        "Ozhukarai": { "latitude": 11.9485, "longitude": 79.7900 }
    },
    "Dadra and Nagar Haveli and Daman and Diu": {
        "Silvassa": { "latitude": 20.2737, "longitude": 73.0088 },
        "Daman": { "latitude": 20.4143, "longitude": 72.8324 },
        "Diu": { "latitude": 20.7144, "longitude": 70.9874 },
        "Nani Daman": { "latitude": 20.4142, "longitude": 72.8323 },
        "Moti Daman": { "latitude": 20.4142, "longitude": 72.8323 }
    },
    "Lakshadweep": {
        "Kavaratti": { "latitude": 10.5667, "longitude": 72.6167 },
        "Minicoy": { "latitude": 8.2842, "longitude": 73.0488 },
        "Andrott": { "latitude": 10.8289, "longitude": 72.1614 },
        "Agatti": { "latitude": 10.8231, "longitude": 72.1760 },
        "Amini": { "latitude": 11.1271, "longitude": 72.7649 }
    },
    "Ladakh": {
        "Leh": { "latitude": 34.1526, "longitude": 77.5771 },
        "Kargil": { "latitude": 34.5553, "longitude": 76.1320 },
        "Drass": { "latitude": 34.3683, "longitude": 75.5072 },
        "Nubra Valley": { "latitude": 34.4955, "longitude": 77.6742 },
        "Zanskar": { "latitude": 33.7055, "longitude": 76.8368 }
    },
    "Jammu and Kashmir": {
        "Srinagar": { "latitude": 34.0837, "longitude": 74.7973 },
        "Jammu": { "latitude": 32.7266, "longitude": 74.8570 },
        "Anantnag": { "latitude": 33.7294, "longitude": 75.1499 },
        "Baramulla": { "latitude": 34.2021, "longitude": 74.3488 },
        "Kathua": { "latitude": 32.3660, "longitude": 75.5131 }
    },
    "Chandigarh": {
        "Chandigarh": { "latitude": 30.7333, "longitude": 76.7794 }
    }
};

const express = require("express");
const serverless = require("serverless-http");
const cors = require("cors");

const app = express();
app.use(cors());

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Welcome to the express vehicle backend!"
    });
});


// GET request to fetch all vehicles
router.get('/state', (req, res) => {
    res.json(Object.keys(citiesData));
});

router.get('/state/:name', (req, res) => {
    for (const [stateName, stateObj] of Object.entries(citiesData)) {
        if (stateName.toLowerCase() == req.params.name.toLowerCase()) {
            let cities = [];
            Object.keys(stateObj).map(city => cities.push({ name: city, coords: stateObj[city] }));
            res.json(cities);
        }
    }
    res.status(404).send('State not found');
});

// GET request to fetch a specific City by Name
router.get('/city/:name', (req, res) => {
    const cityName = req.params.name;
    let city = getCity(cityName);
    if (city)
        res.json({ name: cityName, coords: city });
    else
        res.status(404).send('City not found');
});

function getCity(cityNameAsked) {
    for (const [stateName, cities] of Object.entries(citiesData)) {
        for (const [cityName, cityObj] of Object.entries(cities)) {
            if (cityNameAsked.toLowerCase() == cityName.toLowerCase()) {
                console.log(cityName + ': ' + cityObj);
                return cityObj;
            }
        }
    }
    return undefined;
}

// GET request to fetch all Cities
router.get('/city', (req, res) => {
    const cities = [];
    Object.keys(citiesData).map(states => {
        cities.push(...Object.keys(citiesData[states]));
    });
    if (cities)
        res.json(cities);
    else
        res.status(404).send('City not found');
});

function calculateDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radius of the Earth in kilometers
    const dLat = (lat2 - lat1) * Math.PI / 180; // Difference in latitude
    const dLon = (lon2 - lon1) * Math.PI / 180; // Difference in longitude
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c; // Distance in kilometers
    return distance;
}

// Endpoint to calculate distance between two cities
router.get('/journey/:from/:to/:vehicleType/:comfortLevel', (req, res) => {
    const fromCityName = req.params.from.toLowerCase();
    const toCityName = req.params.to.toLowerCase();
    const fromCityObj = getCity(fromCityName);
    const toCityObj = getCity(toCityName);
    console.log(fromCityName, toCityName);
    // Check if the cities exist in the data
    if (!fromCityObj || !toCityObj) {
        return res.status(404).json({ error: 'City not found' });
    }

    // Get latitude and longitude of fromCity and toCity
    const { latitude: lat1, longitude: lon1 } = fromCityObj;
    const { latitude: lat2, longitude: lon2 } = toCityObj;

    // Calculate distance using the Haversine formula
    const distance = calculateDistance(lat1, lon1, lat2, lon2);  // Distance in kilometers
    const vehicleType = req.params.vehicleType; // Vehicle type: BUS, TRAIN, or PLANE
    const comfortLevel = req.params.comfortLevel; // Comfort level: GRADE A, GRADE B, or GRADE C
    const fare = calculateFare(distance, vehicleType, comfortLevel);
    res.json({ from: fromCityName, to: toCityName, distance: distance.toFixed(2) + ' km', fare });
});

function calculateFare(distance, vehicleType, comfortLevel) {
    // Define fare per kilometer for each vehicle type and comfort level
    const farePerKm = {
        "BUS": {
            "GRADE A": 7,
            "GRADE B": 4,
            "GRADE C": 3
        },
        "TRAIN": {
            "GRADE A": 10,
            "GRADE B": 7,
            "GRADE C": 5
        },
        "PLANE": {
            "GRADE A": 25,
            "GRADE B": 12,
            "GRADE C": 10
        }
    };

    // Calculate total fare based on distance and fare per kilometer
    let totalFare = distance * farePerKm[vehicleType.toUpperCase()][comfortLevel.toUpperCase()];

    // Return the total fare
    return Math.floor(totalFare);
}



app.use('/.netlify/functions/api', router);

module.exports.handler = serverless(app);