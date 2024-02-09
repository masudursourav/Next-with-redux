"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { commentSlice } from "@/redux/slices/commentSlice";
import { store } from "@/redux/store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { getComment } from "./action";
const FormSchema = z.object({
  accountNumber: z.coerce.number(),
});

export function InputForm() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      accountNumber: 0,
    },
  });
  function onSubmit(data: z.infer<typeof FormSchema>) {
    const fetchData = async () => {
      const formData = new FormData();
      formData.append("accountNumber", data.accountNumber.toString());
      try {
        const comments = await getComment(formData);
        store.dispatch(commentSlice.actions.setComment(comments));
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="accountNumber"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Account Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter the Number" {...field} />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
