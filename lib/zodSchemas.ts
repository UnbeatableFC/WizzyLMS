import { z } from "zod";

export const courseLevels = ["BEGINNER", "INTERMEDIATE", "ADVANCED"];
export const courseStatus = ["DRAFT", "PUBLISHED", "ARCHIVED"];

export const courseCategories = [
  "Development",
  "Business",
  "Finance",
  "IT & Software",
  "Office productivity",
  "Personal Development",
  "Design",
  "Marketing",
  "Health & Fitness",
  "Music",
  "Teaching and Academics",
];

export const courseSchema = z.object({
  title: z
    .string()
    .min(3, "Title must be at least 3 characters long")
    .max(100, "Title must be at most 100 characters long"),
  description: z
    .string()
    .min(3, "Description must be at least 3 characters long"),
  fileKey: z.string().min(1, "File is required"),
  price: z.number().min(1, "Price must be a positive number"),
  duration: z
    .number()
    .min(1, "Duration must be at least 1 hour")
    .max(500, "Duration must be at most 500 hours"),
  level: z.enum(courseLevels, "Level is required"),
  category: z.enum(courseCategories , "Category is required"),
  smallDescription: z
    .string()
    .min(3, "Small Description must be at least 3 characters long")
    .max(
      200,
      "Small Description must be at most 200 characters long"
    ),
  slug: z.string().min(3, "Slug must be at least 3 characters long"),
  status: z.enum(courseStatus, "Status is required"),
});

export type CourseSchemaType = z.infer<typeof courseSchema>;
