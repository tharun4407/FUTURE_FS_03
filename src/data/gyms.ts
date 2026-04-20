import gym1 from "@/assets/gym-1.jpg";
import gym2 from "@/assets/gym-2.jpg";
import { extraGyms } from "./extra-gyms";
import gym3 from "@/assets/gym-3.jpg";
import gym4 from "@/assets/gym-4.jpg";
import gym5 from "@/assets/gym-5.jpg";
import gym6 from "@/assets/gym-6.png";
import gym7 from "@/assets/gym-7.jpg";
import gym8 from "@/assets/gym-8.jpg";
import gym9 from "@/assets/gym-9.jpg";
import gym10 from "@/assets/gym-10.jpg";
import gym11 from "@/assets/gym-11.png";
import gym12 from "@/assets/gym-12.jpg";
import gym13 from "@/assets/gym-13.jpg";
import gym14 from "@/assets/gym-14.jpg";
import gym15 from "@/assets/gym-15.jpg";
import gym16 from "@/assets/gym-16.jpg";
import gym17 from "@/assets/gym-17.jpg";
import gym18 from "@/assets/gym-18.jpg";
import gym19 from "@/assets/gym-19.jpg";
import gym20 from "@/assets/gym-20.jpg";


import type { Trainer } from "./trainers";
import { allTrainers, getTrainersByIds } from "./trainers";



export interface Review {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Gym {
  id: string;
  name: string;
  location: string;
  address: string;
  phone: string;
  image: string;
  gallery: string[];
  monthlyPrice: number;
  quarterlyPrice: number;
  yearlyPrice: number;
  rating: number;
  reviewCount: number;
  type: "Budget" | "Premium" | "Women-only";
  features: string[];
  equipment: string[];
  facilities: string[];
  trainers: Trainer[];
  reviews: Review[];
  hours: { days: string; time: string }[];
  offers: string[];
  mapQuery: string;
}





export const gyms: Gym[] = [
  {
    id: "ironforge-koramangala",
    name: "IronForge Fitness",
    location: "Koramangala, Bengaluru",
    address: "Krishna Nagar, Hosur Main Road, opposite The Forum Mall, Tavarekere, Koramangala Industrial Layout, S.G. Palya, Bengaluru, Karnataka 560030",
    phone: "+91 98765 43210",
    image: gym1,
    gallery: [gym1, gym3, gym5],
    monthlyPrice: 1500,
    quarterlyPrice: 4000,
    yearlyPrice: 14000,
    rating: 4.7,
    reviewCount: 234,
    type: "Premium",
    features: ["AC", "Trainer", "Cardio", "CrossFit"],
    equipment: ["Treadmill", "Dumbbells", "Bench Press", "Cable Machine", "Squat Rack", "Leg Press"],
    facilities: ["AC", "Locker Room", "Shower", "Parking", "Music System", "Juice Bar"],
    trainers: getTrainersByIds([0, 1, 2], allTrainers),
    reviews: [
      { name: "Rahul K.", rating: 5, comment: "Best gym in Koramangala! Great equipment and trainers.", date: "2 weeks ago" },
      { name: "Meera S.", rating: 4, comment: "Clean facilities and helpful staff. A bit crowded during evenings.", date: "1 month ago" },
      { name: "Aditya P.", rating: 5, comment: "Amazing CrossFit section. Worth every rupee!", date: "3 weeks ago" },
    ],
    hours: [
      { days: "Mon–Fri", time: "5:00 AM – 10:00 PM" },
      { days: "Sat", time: "6:00 AM – 8:00 PM" },
      { days: "Sun", time: "Closed" },
    ],
    offers: ["First month free", "20% discount on yearly plan", "Free personal training for 7 days"],
    mapQuery: "Koramangala+Bengaluru",
  },
  {
    id: "flexzone-indiranagar",
    name: "FlexZone Gym",
    location: "Indiranagar, Bengaluru",
    address: "100 Feet Road, Indiranagar, Bengaluru, Karnataka 560038",
    phone: "+91 98765 12345",
    image: gym2,
    gallery: [gym2, gym4, gym6],
    monthlyPrice: 1000,
    quarterlyPrice: 2500,
    yearlyPrice: 9000,
    rating: 4.5,
    reviewCount: 187,
    type: "Premium",
    features: ["AC", "Trainer", "Cardio"],
    equipment: ["Treadmill", "Dumbbells", "Bench Press", "Cable Machine", "Squat Rack"],
    facilities: ["AC", "Locker Room", "Shower", "Parking", "Music System"],
    trainers: getTrainersByIds([1, 4], allTrainers),
    reviews: [
      { name: "Divya R.", rating: 5, comment: "Love the vibe here! Great cardio section.", date: "1 week ago" },
      { name: "Suresh M.", rating: 4, comment: "Good trainers but parking can be an issue.", date: "2 weeks ago" },
    ],
    hours: [
      { days: "Mon–Fri", time: "5:00 AM – 10:00 PM" },
      { days: "Sat", time: "6:00 AM – 8:00 PM" },
      { days: "Sun", time: "Closed" },
    ],
    offers: ["20% discount on yearly plan", "Free personal training for 7 days"],
    mapQuery: "Indiranagar+Bengaluru",
  },
  {
    id: "powerhouse-whitefield",
    name: "PowerHouse Gym",
    location: "Whitefield, Bengaluru",
    address: "ITPL Main Road, Whitefield, Bengaluru, Karnataka 560066",
    phone: "+91 98765 67890",
    image: gym3,
    gallery: [gym3, gym1, gym5],
    monthlyPrice: 800,
    quarterlyPrice: 2000,
    yearlyPrice: 7000,
    rating: 4.3,
    reviewCount: 156,
    type: "Budget",
    features: ["Trainer", "Cardio", "CrossFit"],
    equipment: ["Treadmill", "Dumbbells", "Bench Press", "Squat Rack", "Kettlebells"],
    facilities: ["Locker Room", "Parking", "Music System"],
    trainers: getTrainersByIds([3, 0], allTrainers),
    reviews: [
      { name: "Kiran T.", rating: 4, comment: "Great value for money. CrossFit classes are awesome!", date: "3 days ago" },
      { name: "Preethi L.", rating: 5, comment: "Best budget gym in Whitefield!", date: "1 week ago" },
    ],
    hours: [
      { days: "Mon–Fri", time: "5:00 AM – 10:00 PM" },
      { days: "Sat", time: "6:00 AM – 8:00 PM" },
      { days: "Sun", time: "Closed" },
    ],
    offers: ["First month free", "Refer a friend & get 1 month free"],
    mapQuery: "Whitefield+Bengaluru",
  },
  {
    id: "fitqueen-electronic-city",
    name: "FitQueen Studio",
    location: "Electronic City, Bengaluru",
    address: "Phase 1, Electronic City, Bengaluru, Karnataka 560100",
    phone: "+91 98765 24680",
    image: gym4,
    gallery: [gym4, gym2, gym6],
    monthlyPrice: 1200,
    quarterlyPrice: 3000,
    yearlyPrice: 10000,
    rating: 4.8,
    reviewCount: 98,
    type: "Women-only",
    features: ["AC", "Trainer", "Cardio"],
    equipment: ["Treadmill", "Dumbbells", "Yoga Mats", "Resistance Bands", "Pilates Reformer"],
    facilities: ["AC", "Locker Room", "Shower", "Music System", "Childcare"],
    trainers: getTrainersByIds([1, 5], allTrainers),
    reviews: [
      { name: "Anita J.", rating: 5, comment: "Finally a safe and comfortable space for women to work out!", date: "5 days ago" },
      { name: "Lakshmi V.", rating: 5, comment: "Amazing trainers and great atmosphere.", date: "2 weeks ago" },
    ],
    hours: [
      { days: "Mon–Fri", time: "6:00 AM – 9:00 PM" },
      { days: "Sat", time: "7:00 AM – 7:00 PM" },
      { days: "Sun", time: "8:00 AM – 12:00 PM" },
    ],
    offers: ["First month free", "20% discount on yearly plan", "Free personal training for 7 days"],
    mapQuery: "Electronic+City+Bengaluru",
  },
  {
    id: "muscle-factory-btm",
    name: "Muscle Factory",
    location: "BTM Layout, Bengaluru",
    address: "2nd Stage, BTM Layout, Bengaluru, Karnataka 560076",
    phone: "+91 98765 13579",
    image: gym5,
    gallery: [gym5, gym3, gym1],
    monthlyPrice: 600,
    quarterlyPrice: 1500,
    yearlyPrice: 5000,
    rating: 4.1,
    reviewCount: 312,
    type: "Budget",
    features: ["Trainer", "Cardio"],
    equipment: ["Treadmill", "Dumbbells", "Bench Press", "Squat Rack"],
    facilities: ["Locker Room", "Parking"],
    trainers: getTrainersByIds([4], allTrainers),
    reviews: [
      { name: "Ganesh R.", rating: 4, comment: "Affordable and gets the job done. No frills gym.", date: "1 month ago" },
      { name: "Sanjay K.", rating: 4, comment: "Good for beginners. Trainer is very helpful.", date: "3 weeks ago" },
    ],
    hours: [
      { days: "Mon–Fri", time: "5:00 AM – 10:00 PM" },
      { days: "Sat", time: "6:00 AM – 8:00 PM" },
      { days: "Sun", time: "Closed" },
    ],
    offers: ["Refer a friend & get 1 month free"],
    mapQuery: "BTM+Layout+Bengaluru",
  },
  {
    id: "elite-fitness-koramangala",
    name: "Elite Fitness Club",
    location: "Koramangala, Bengaluru",
    address: "5th Block, Koramangala, Bengaluru, Karnataka 560034",
    phone: "+91 98765 97531",
    image: gym6,
    gallery: [gym19, gym2, gym4],
    monthlyPrice: 2500,
    quarterlyPrice: 6500,
    yearlyPrice: 22000,
    rating: 4.9,
    reviewCount: 89,
    type: "Premium",
    features: ["AC", "Trainer", "Cardio", "CrossFit"],
    equipment: ["Treadmill", "Dumbbells", "Bench Press", "Cable Machine", "Squat Rack", "Leg Press", "Smith Machine", "Rowing Machine"],
    facilities: ["AC", "Locker Room", "Shower", "Parking", "Music System", "Juice Bar", "Sauna", "Swimming Pool"],
    trainers: getTrainersByIds([0, 1, 3], allTrainers),
    reviews: [
      { name: "Nikhil M.", rating: 5, comment: "Premium experience. The pool and sauna are amazing!", date: "4 days ago" },
      { name: "Pooja A.", rating: 5, comment: "Worth the price. Best gym in Bangalore hands down.", date: "1 week ago" },
      { name: "Varun S.", rating: 5, comment: "World class facilities. Feel like I'm training in a 5-star gym.", date: "2 weeks ago" },
    ],
    hours: [
      { days: "Mon–Fri", time: "5:00 AM – 11:00 PM" },
      { days: "Sat", time: "6:00 AM – 9:00 PM" },
      { days: "Sun", time: "7:00 AM – 2:00 PM" },
    ],
    offers: ["First month free", "20% discount on yearly plan", "Free personal training for 7 days", "Complimentary spa session"],
    mapQuery: "Koramangala+5th+Block+Bengaluru",
  },
  // New Gym 7
  {
    id: "apex-fitness-malleswaram",
    name: "Apex Fitness Center",
    location: "Malleshwaram, Bengaluru",
    address: "8th Temple Street, Malleshwaram, Bengaluru, Karnataka 560003",
    phone: "+91 98765 86420",
    image: gym7,
    gallery: [gym7, gym8, gym9],
    monthlyPrice: 1100,
    quarterlyPrice: 2800,
    yearlyPrice: 9500,
    rating: 4.4,
    reviewCount: 201,
    type: "Premium",
    features: ["AC", "Trainer", "Cardio"],
    equipment: ["Treadmill", "Dumbbells", "Bench Press", "Leg Extension", "Elliptical"],
    facilities: ["AC", "Locker Room", "Shower", "Parking"],
    trainers: getTrainersByIds([2, 6, 9], allTrainers),
    reviews: [
      { name: "Vikram R.", rating: 5, comment: "Excellent cardio machines and helpful yoga trainer.", date: "1 week ago" },
      { name: "Shalini D.", rating: 4, comment: "Good location and facilities.", date: "10 days ago" },
    ],
    hours: [
      { days: "Mon–Fri", time: "5:30 AM – 9:30 PM" },
      { days: "Sat", time: "6:00 AM – 8:00 PM" },
      { days: "Sun", time: "Closed" },
    ],
    offers: ["Refer a friend & get 1 month free", "10% off quarterly"],
    mapQuery: "Malleshwaram+Bengaluru",
  },
  // New Gym 8
  {
    id: "vigor-gym-hsr-layout",
    name: "Vigor Gym HSR",
    location: "HSR Layout, Bengaluru",
    address: "17th Main, Sector 3, HSR Layout, Bengaluru, Karnataka 560102",
    phone: "+91 98765 11223",
    image: gym8,
    gallery: [gym2, gym5, gym3],
    monthlyPrice: 750,
    quarterlyPrice: 1900,
    yearlyPrice: 6500,
    rating: 4.2,
    reviewCount: 289,
    type: "Budget",
    features: ["Trainer", "CrossFit"],
    equipment: ["Dumbbells", "Squat Rack", "Kettlebells", "Pull-up Bar"],
    facilities: ["Locker Room", "Music System"],
    trainers: getTrainersByIds([3, 7], allTrainers),
    reviews: [
      { name: "Arun S.", rating: 4, comment: "Solid budget option for strength training.", date: "4 days ago" },
      { name: "Priya M.", rating: 5, comment: "Love the CrossFit vibe!", date: "2 weeks ago" },
    ],
    hours: [
      { days: "Mon–Sat", time: "5:00 AM – 10:00 PM" },
      { days: "Sun", time: "7:00 AM – 12:00 PM" },
    ],
    offers: ["First month 50% off"],
    mapQuery: "HSR+Layout+Bengaluru",
  },
  // New Gym 9
  {
    id: "harmony-women-marathahalli",
    name: "Harmony Women Fitness",
    location: "Marathahalli, Bengaluru",
    address: "S.L.V. Complex, Outer Ring Road, Marathahalli, Bengaluru, Karnataka 560037",
    phone: "+91 98765 33445",
    image: gym9,
    gallery: [gym3, gym1, gym6],
    monthlyPrice: 950,
    quarterlyPrice: 2400,
    yearlyPrice: 8500,
    rating: 4.6,
    reviewCount: 143,
    type: "Women-only",
    features: ["AC", "Trainer", "Yoga"],
    equipment: ["Yoga Mats", "Resistance Bands", "TRX", "Bosuball"],
    facilities: ["AC", "Locker Room", "Shower", "Juice Bar"],
    trainers: getTrainersByIds([5, 8, 10], allTrainers),
    reviews: [
      { name: "Deepa K.", rating: 5, comment: "Perfect for women! Great yoga instructors.", date: "6 days ago" },
      { name: "Ruchi P.", rating: 4, comment: "Clean and motivating environment.", date: "1 month ago" },
    ],
    hours: [
      { days: "Mon–Fri", time: "6:00 AM – 9:00 PM" },
      { days: "Sat–Sun", time: "7:00 AM – 1:00 PM" },
    ],
    offers: ["Free trial class"],
    mapQuery: "Marathahalli+Bengaluru",
  },
  // New Gym 10
  {
    id: "thunder-gym-jayanagar",
    name: "Thunder Strength Gym",
    location: "Jayanagar, Bengaluru",
    address: "47th Cross, 9th Block, Jayanagar, Bengaluru, Karnataka 560069",
    phone: "+91 98765 55667",
    image: gym10,
    gallery: [gym4, gym2, gym5],
    monthlyPrice: 1400,
    quarterlyPrice: 3700,
    yearlyPrice: 12500,
    rating: 4.5,
    reviewCount: 176,
    type: "Premium",
    features: ["AC", "Trainer", "Cardio", "Powerlifting"],
    equipment: ["Deadlift Platform", "Power Rack", "Bench Press", "Cable Crossover", "Plate-loaded Machines"],
    facilities: ["AC", "Locker Room", "Shower", "Parking", "Music System"],
    trainers: getTrainersByIds([4, 0, 11, 2], allTrainers),
    reviews: [
      { name: "Manish G.", rating: 5, comment: "Best place for serious lifters!", date: "1 week ago" },
      { name: "Swati N.", rating: 4, comment: "Dedicated powerlifting area is awesome.", date: "3 weeks ago" },
    ],
    hours: [
      { days: "Mon–Fri", time: "4:00 AM – 11:00 PM" },
      { days: "Sat", time: "5:00 AM – 9:00 PM" },
      { days: "Sun", time: "Closed" },
    ],
    offers: ["20% off yearly with 6-month commitment"],
    mapQuery: "Jayanagar+Bengaluru",
  },
  // New Gym 11
  {
    id: "peak-performance-rajajinagar",
    name: "Peak Performance",
    location: "Rajajinagar, Bengaluru",
    address: "Dr. Rajkumar Road, Rajajinagar 1st Block, Bengaluru, Karnataka 560010",
    phone: "+91 98765 77889",
    image: gym11,
    gallery: [gym5, gym3, gym1],
    monthlyPrice: 1800,
    quarterlyPrice: 4800,
    yearlyPrice: 16500,
    rating: 4.7,
    reviewCount: 112,
    type: "Premium",
    features: ["AC", "Trainer", "Cardio", "CrossFit"],
    equipment: ["Assault Bike", "Rower", "Wall Balls", "Rings", "Barbell"],
    facilities: ["AC", "Locker Room", "Shower", "Parking", "Sauna"],
    trainers: getTrainersByIds([6, 7, 1, 9, 3], allTrainers),
    reviews: [
      { name: "Rohan B.", rating: 5, comment: "Elite CrossFit coaching and equipment.", date: "2 days ago" },
      { name: "Priyanka S.", rating: 5, comment: "Transformative workouts!", date: "12 days ago" },
      { name: "Amit V.", rating: 4, comment: "Sauna is a nice touch after workouts.", date: "1 month ago" },
    ],
    hours: [
      { days: "Mon–Fri", time: "5:00 AM – 10:00 PM" },
      { days: "Sat", time: "6:00 AM – 8:00 PM" },
      { days: "Sun", time: "8:00 AM – 12:00 PM" },
    ],
    offers: ["Free nutrition consultation", "First month free"],
    mapQuery: "Rajajinagar+Bengaluru",
  },
];

export const allGyms: Gym[] = [...gyms, ...extraGyms];

