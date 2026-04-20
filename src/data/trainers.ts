import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import trainer4 from "@/assets/trainer-4.jpg";
import trainer5 from "@/assets/trainer-5.jpg";
import trainer6 from "@/assets/trainer6.jpg";
import trainer7 from "@/assets/trainer-7.jpg";
import trainer8 from "@/assets/trainer-8.jpg";
import trainer9 from "@/assets/trainer-9.jpg";
import trainer10 from "@/assets/trainer-10.jpg";
import trainer11 from "@/assets/trainer-11.jpg";
import trainer12 from "@/assets/trainer-12.jpg";
import trainer13 from "@/assets/trainer-13.jpg";
import { Gym } from "./gyms";

export interface Trainer {
  id:number;
  name: string;
  age: number;
  experience: string;
  specialty: string;
  specializations: string[];
  certificates: string[];
  image: string;
}

export const allTrainers: Trainer[] = [
  {
    id: 1,
    name: "Arjun Mehta",
    age: 28,
    experience: "8 years",
    specialty: "Bodybuilding & Strength Training",
    specializations: ["Bodybuilding", "Strength Training", "Hypertrophy Training"],
    certificates: ["NSCA-CPT", "ACE Strength Specialist", "ISSA Bodybuilding Coach"],
    image: trainer1,
  },
  {
    id: 2,
    name: "Sneha Kapoor",
    age: 29,
    experience: "6 years",
    specialty: "Weight Loss & HIIT",
    specializations: ["HIIT Workouts", "Weight Loss", "Metabolic Conditioning"],
    certificates: ["NASM Weight Loss", "ACE Group Fitness", "CrossFit Level 1"],
    image: trainer2,
  },
  {
    id: 3,
    name: "Rohan Desai",
    age: 32,
    experience: "5 years",
    specialty: "Yoga & Flexibility",
    specializations: ["Hatha Yoga", "Vinyasa Flow", "Flexibility Training"],
    certificates: ["RYT-200 Yoga", "Yoga Alliance", "ISSA Flexibility"],
    image: trainer3,
  },
  {
    id: 4,
    name: "Ajay Sharma",
    age: 30,
    experience: "7 years",
    specialty: "CrossFit & Functional Training",
    specializations: ["CrossFit", "Functional Fitness", "Metcon"],
    certificates: ["CrossFit Level 2", "NASM FPT", "ACE Functional Training"],
    image: trainer4,
  },
  {
    id: 5,
    name:  "Ananya Reddy",
    age: 35,
    experience: "10 years",
    specialty: "Powerlifting & Conditioning",
    specializations: ["Powerlifting", "Strength Conditioning", "Squat/Bench/Deadlift"],
    certificates: ["USAPL Coach", "NSCA-CSCS", "StrongFirst"],
    image: trainer5,
  },
  {
    id: 6,
    name: "Vikram Singh",
    age: 26,
    experience: "4 years",
    specialty: "Pilates & Core Training",
    specializations: ["Pilates", "Core Strength", "Reformer Pilates"],
    certificates: ["PMA Pilates", "ACE Pilates Instructor", "Core360"],
    image: trainer6,
  },
  {
    id: 7,
    name: "Karan Patel",
    age: 34,
    experience: "9 years",
    specialty: "Nutrition & Wellness Coaching",
    specializations: ["Nutrition Coaching", "Wellness", "Weight Management"],
    certificates: ["ISSA Nutrition", "Precision Nutrition L1", "ACE Wellness Coach"],
    image: trainer7,
  },
      {
    id: 8,
    name: "Lakshmi Nair",
    age: 27,
    experience: "5 years",
    specialty: "Zumba & Dance Fitness",
    specializations: ["Zumba", "Dance Fitness", "Aerobics"],
    certificates: ["Zumba Instructor", "ACE Group Fitness", "Dance Fitness Specialist"],
    image: trainer8,
  },
  {
    id:9,
    name: "Rajesh Kumar",
    age: 40,
    experience: "12 years",
    specialty: "Olympic Weightlifting",
    specializations: ["Olympic Lifting", "Snatch", "Clean & Jerk"],
    certificates: ["USAW Level 2 Coach", "NSCA Olympic WL", "IWF Coach"],
    image: trainer9,
  },
  {
    id: 10,
    name: "Meera Joshi",
    age: 31,
    experience: "6 years",
    specialty: "Prenatal & Postnatal Fitness",
    specializations: ["Prenatal Fitness", "Postnatal Recovery", "Maternity Training"],
    certificates: ["ACE Pre/Postnatal", "ISSA Maternity Fitness", "Precor Maternity"],
    image: trainer10,
  },
    {
      id: 11,
    name: "Siddharth Bose",
    age: 33,
    experience: "7 years",
    specialty: "MMA & Combat Fitness",
    specializations: ["MMA Conditioning", "Combat Fitness", "Fight Training"],
    certificates: ["NASM MMA Conditioning", "ISSA Combat Sports", "UFC Fit"],
    image: trainer11,
  },
  {
    id: 12,
    name: "Neha Gupta",
    age: 29,
    experience: "8 years",
    specialty: "Calisthenics & Bodyweight Training",
    specializations: ["Calisthenics", "Bodyweight", "Street Workout"],
    certificates: ["ISSA Calisthenics", "ACE Bodyweight", "RRCA"],
    image: trainer12,
  },
  {
    id: 13,
    name: "Aryan Khan",
    age: 36,
    experience: "11 years",
    specialty: "Endurance Training & Marathon Prep",
    specializations: ["Marathon Training", "Endurance Running", "Long Distance"],
    certificates: ["RRCA Coach", "USATF Endurance", "ISSA Endurance"],
    image: trainer13,
  },
];

export const getTrainersByIds = (ids: number[], allTrainers: Trainer[]): Trainer[] =>
  ids.map((index) => allTrainers[index]).filter(Boolean);
