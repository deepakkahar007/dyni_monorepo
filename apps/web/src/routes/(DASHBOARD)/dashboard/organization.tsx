import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/(DASHBOARD)/dashboard/organization')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/(DASHBOARD)/dashboard/organization"!</div>
}
