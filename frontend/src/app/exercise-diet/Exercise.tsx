export type Exercise = {
    id: string;
    title: string;
    duration: string;
    difficulty: string;
    type: string;
    description: string;
    instructions: string[];
    safetyTips: string[];
    image: any;
}
export const exercise: Exercise[] = [
    {
        id: "1",
        title: "Push-ups",
        duration: "10 minutes", 
        difficulty: "Beginner",
        type: "Strength",
        description: "A basic upper body exercise that targets the chest, shoulders, and triceps.",
        instructions: [
            "Start in a plank position with your hands shoulder-width apart.",
            "Lower your body until your chest nearly touches the floor.",   
            "Push yourself back up to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        safetyTips: [
            "Keep your body in a straight line from head to heels.",
            "Avoid letting your hips sag or pike up.",
            "If you have wrist pain, consider doing push-ups on your fists or using push-up bars."
        ],
        image: require("../../../assets/Myimg/pushup.png")
    },
    {
        id: "2",
        title: "Squats",
        duration: "10 minutes",
        difficulty: "Beginner",
        type: "Strength",
        description: "A lower body exercise that targets the thighs, hips, and buttocks.",
        instructions: [
            "Stand with your feet shoulder-width apart.",
            "Lower your body as if you're sitting back into a chair, keeping your chest up and knees behind your toes.",
            "Push through your heels to return to the starting position.",
            "Repeat for the desired number of repetitions."
        ],
        safetyTips: [
            "Keep your back straight and chest up.",
            "Don't let your knees cave inward.",    
            "Go as low as your flexibility allows without compromising form."
        ],
        image: require("../../../assets/Myimg/squats.png")
    }, {
    id: "morning-walk",
    title: "Morning Walk",
    duration: "20 min",
    difficulty: "Easy",
    type: "Cardio",
    description: "A refreshing walk to start your day.",
    instructions: [
      "Wear comfortable shoes",
      "Keep a steady pace",
      "Maintain good posture",
      "Stay hydrated",
    ],
    safetyTips: [
      "Avoid extreme weather",
      "Stay hydrated",
      "Listen to your body",
    ],
    image: require("../../../assets/Myimg/walk.png"),
  },
  {
    id: "yoga",
    title: "Morning Yoga",
    duration: "25 min",
    difficulty: "Easy",
    type: "Flexibility",
    description: "Improve flexibility and relaxation.",
    instructions: [
      "Choose a comfortable space",
      "Start with gentle stretches",
      "Breathe slowly",
      "Avoid forcing any movement",
    ],
    safetyTips: [
      "Use a yoga mat",
      "Stop if you feel pain",
      "Keep breathing normally",
    ],
    image: require("../../../assets/Myimg/yoga.png"),
  },
  {
    id: "cycling",
    title: "Cycling",
    duration: "30 min",
    difficulty: "Moderate",
    type: "Cardio",
    description: "A great way to improve cardiovascular fitness.",
    instructions: [
      "Check your bicycle",
      "Wear a helmet",
      "Start at a comfortable speed",
      "Cool down after cycling",
    ],
    safetyTips: [
      "Wear protective equipment",
      "Follow road safety rules",
      "Avoid unsafe routes",
    ],
    image: require("../../../assets/Myimg/cycling.png"),
  },

]