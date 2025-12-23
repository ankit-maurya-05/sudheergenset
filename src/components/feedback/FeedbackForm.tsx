// components/feedback/FeedbackForm.tsx
"use client";

export default function FeedbackForm() {
  return (
    <form className="space-y-4 max-w-md">
      <input className="w-full border p-2" placeholder="Name" />
      <input className="w-full border p-2" placeholder="Phone" />
      <textarea className="w-full border p-2" placeholder="Feedback" />
      <button className="bg-green-600 text-white px-4 py-2 rounded">
        Submit
      </button>
    </form>
  );
}
