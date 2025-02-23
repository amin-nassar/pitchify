"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState, useActionState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { formSchema } from "@/lib/validation";
import { z } from "zod";
import { toast } from "sonner";
import { createPitch } from "@/lib/actions";
import { useRouter } from "next/navigation";

function StartupForm() {
  const router = useRouter();
  const [errors, setErrors] = useState<Record<string, string>>({});
  const handleSubmitForm = async (prevState: any, formData: FormData) => {
    try {
      const formValues = {
        title: formData.get("title"),
        description: formData.get("description"),
        category: formData.get("category"),
        link: formData.get("link"),
        pitch,
      };

      await formSchema.parseAsync(formValues);

      const result = await createPitch(prevState, formData, pitch);

      if (result.status === "SUCCESS") {
        toast.success("Success", {
          description: "Your startup pitch has been created successfully",
        });

        router.push(`/startup/${result._id}`);
      }
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors = error.flatten().fieldErrors;
        setErrors(fieldErrors as unknown as Record<string, string>);

        toast.error("Error", {
          description: "Please check your inputs & try again.",
        });

        return { ...prevState, error: "Validation failed", status: "ERROR" };
      }

      toast.error("Error", {
        description: "An unexpected error has occurred",
      });

      return {
        ...prevState,
        error: "An unexpected error has occurred",
        status: "ERROR",
      };
    }
  };

  const INITIAL_STATE = {
    status: "INITIAL",
  };

  const [_, formAction, isPending] = useActionState(
    handleSubmitForm,
    INITIAL_STATE
  );

  const [pitch, setPitch] = useState("");

  return (
    <form action={formAction} className="startup-form">
      <div>
        <label className="startup-form-label" htmlFor="title">
          Title
        </label>
        <Input
          id="title"
          name="title"
          className="startup-form-input"
          required
          placeholder="Startup Title"
        />
        {errors.title && <p className="startup-form-error">{errors.title}</p>}
      </div>

      <div>
        <label className="startup-form-label" htmlFor="description">
          Description
        </label>
        <Textarea
          id="description"
          name="description"
          className="startup-form-textarea"
          required
          placeholder="Startup Description"
        />
        {errors.description && (
          <p className="startup-form-error">{errors.description}</p>
        )}
      </div>

      <div>
        <label className="startup-form-label" htmlFor="category">
          Category
        </label>
        <Input
          id="category"
          name="category"
          className="startup-form-input"
          required
          placeholder="Startup Category: Tech, Heatlh, Education"
        />
        {errors.category && (
          <p className="startup-form-error">{errors.category}</p>
        )}
      </div>

      <div>
        <label className="startup-form-label" htmlFor="link">
          Image URL
        </label>
        <Input
          id="link"
          name="link"
          className="startup-form-input"
          required
          placeholder="Startup Image URL"
        />
        {errors.link && <p className="startup-form-error">{errors.link}</p>}
      </div>

      <div data-color-mode="light">
        <label className="startup-form-label" htmlFor="pitch">
          Pitch
        </label>
        <MDEditor
          id="pitch"
          value={pitch}
          onChange={(e) => setPitch(e || "")}
          preview="edit"
          height={300}
          className="mt-3 overflow-hidden !rounded-xl"
          previewOptions={{ disallowedElements: ["style"] }}
          textareaProps={{
            placeholder: "Briefly describe your idea what problem it solves",
          }}
        />
        {errors.pitch && <p className="startup-form-error">{errors.pitch}</p>}
      </div>

      <Button
        type="submit"
        className="startup-form-btn text-white"
        disabled={isPending}
      >
        {isPending ? "Submitting..." : "Submit your pitch"}
        <Send className="!size-4" />
      </Button>
    </form>
  );
}

export default StartupForm;
