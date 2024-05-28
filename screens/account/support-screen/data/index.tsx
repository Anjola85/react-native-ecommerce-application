import { AntDesign } from "@expo/vector-icons";

export const support_questions_links = [
  {
    linkfunc: () => console.log("question link pressed from prop"),
    text: "How Quickmart works",
    sub_text: "What we do, the communities we serve",
    next_icon: (
      <AntDesign
        name="right"
        size={24}
        color="#292D32"
        style={{ fontWeight: "bold", marginBottom: 5 }}
      />
    ),
  },
  {
    linkfunc: () => console.log("question link pressed from prop"),
    text: "Profile and Account settings",
    sub_text: "Personal settings, login problems and notifications",
    next_icon: (
      <AntDesign
        name="right"
        size={24}
        color="#292D32"
        style={{ fontWeight: "bold", marginBottom: 5 }}
      />
    ),
  },
  {
    linkfunc: () => console.log("question link pressed from prop"),
    text: "Senior Navigation and Insights",
    sub_text: "Special support for customers over age 60",
    next_icon: (
      <AntDesign
        name="right"
        size={24}
        color="#292D32"
        style={{ fontWeight: "bold", marginBottom: 5 }}
      />
    ),
  },
  {
    linkfunc: () => console.log("question link pressed from prop"),
    text: "Fees and pricing",
    sub_text: "Item pricing, referrals, taxes",
    next_icon: (
      <AntDesign
        name="right"
        size={24}
        color="#292D32"
        style={{ fontWeight: "bold", marginBottom: 5 }}
      />
    ),
  },
  {
    linkfunc: () => console.log("question link pressed from prop"),
    text: "Get to Know Us",
    sub_text: "About us, journey and insights",
    next_icon: (
      <AntDesign
        name="right"
        size={24}
        color="#292D32"
        style={{ fontWeight: "bold", marginBottom: 5 }}
      />
    ),
  },
];
