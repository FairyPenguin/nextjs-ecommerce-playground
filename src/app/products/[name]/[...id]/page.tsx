import React from "react";

export default function page({
  params,
}: {
  params: { name: string; id: string };
}) {
  return (
    <div>
      page
      <h2>name:{params.id}</h2>
      <h2>name:{params.name}</h2>
    </div>
  );
}
