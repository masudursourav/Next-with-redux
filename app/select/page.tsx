import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
// Step One Schema
const stepOneSchema = z.object({
  select: z.enum(["A", "B"]).refine((value) => value !== "", {
    message: "Select option is required",
  }),
});

// Step Two Schema
const stepTwoSchema = z
  .object({
    inputOne: z.string().optional(),
    inputTwo: z.string().optional(),
  })
  .refine((data) => {
    if (data.select === "A") {
      return z
        .object({
          inputOne: z.string().nonempty("Input 1 is required"),
        })
        .safeParse(data);
    } else if (data.select === "B") {
      return z
        .object({
          inputTwo: z.string().nonempty("Input 2 is required"),
        })
        .safeParse(data);
    }
    return true;
  });

export default function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(stepOneSchema.merge(stepTwoSchema)),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <select {...register("select")} placeholder="Select option">
        <option value="A">Option A</option>
        <option value="B">Option B</option>
      </select>

      <input placeholder="Input 1" {...register("inputOne")} />
      <input placeholder="Input 2" {...register("inputTwo")} />

      <input type="submit" />
    </form>
  );
}
