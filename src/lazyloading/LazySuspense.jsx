import React from "react";

export default function LazyComponent() {
  const programmingLanguages = [
    "JavaScript",
    "Python",
    "Java",
    "C++",
    "Ruby",
    "Go",
    "Swift",
    "PHP",
    "TypeScript",
    "Kotlin",
  ];
  return (
    <section>
      <h1>Programming Language</h1>
      <ul>
        {programmingLanguages.map((language, index) => (
          <li key={index}>{language}</li>
        ))}
      </ul>
    </section>
  );
}
