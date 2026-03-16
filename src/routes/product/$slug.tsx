import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/product/$slug")({
  beforeLoad: ({ params }) => {
    // Redirect before the component renders
    throw redirect({
      to: "/"
    });
  },
  component: RouteComponent
});

function RouteComponent() {
  // The component won't render because of the redirect
  return <div>Nothing here yet</div>;
}
