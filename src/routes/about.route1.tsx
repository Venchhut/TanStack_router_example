import * as React from 'react'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/about/route1')({
  component: RouteComponent,
})

function RouteComponent() {
  return 'Hello /about/route1!'
}
