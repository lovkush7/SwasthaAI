export type mealCategory = | "Breakfast" | "Lunch" | "Dinner" | "Snack";

export type Meal ={
    id: string;
    name: string;
    category: mealCategory;
    description: string;
    time: string;
    calories: number;
    tags: string[];
    image: any;
}

export const mealCategory: mealCategory[] = ["Breakfast", "Lunch", "Dinner", "Snack"];

export const meals: Meal[] = [
  {
    id: "breakfast",
    name: "Oats with Fruits",
    category: "Breakfast",
    description: "Healthy oats with fresh fruits",
    time: "15 min",
    calories: 250,
    tags: ["Vegetarian", "Healthy"],
    image: require("../../../assets/Myimg/breakfast.png"),
  },
  {
    id: "lunch",
    name: "Grilled Chicken Salad",
    category: "Lunch",
    description: "Fresh vegetables with grilled chicken",
    time: "10 min",
    calories: 320,
    tags: ["High Protein", "Low Carb"],
    image: require("../../../assets/Myimg/lunch.png"),
  },
  {
    id: "dinner",
    name: "Vegetable Stir Fry",
    category: "Dinner",
    description: "Fresh mixed vegetable stir fry",
    time: "25 min",
    calories: 280,
    tags: ["Vegetarian", "Healthy"],
    image: require("../../../assets/Myimg/dinner.png"),
  },
  {
    id: "snacks",
    name: "Fruit Salad",
    category: "Snack",
    description: "Seasonal fresh fruit salad",
    time: "5 min",
    calories: 150,
    tags: ["Healthy", "Low Fat"],
    image: require("../../../assets/Myimg/snack.png"),
  },
];