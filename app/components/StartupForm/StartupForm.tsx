"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import React, { useState } from "react";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

function StartupForm() {
  const [pitch, setPitch] = useState("");

  return (
    <form action={() => {}} className="startup-form">
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
      </div>

      <Button type="submit" className="startup-form-btn text-white">
        Submit your pitch
        <Send className="!size-4" />
      </Button>
    </form>
  );
}

export default StartupForm;
