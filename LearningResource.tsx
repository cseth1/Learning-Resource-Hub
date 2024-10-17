#Front end design layout 

import React from 'react'
import { Search, Book, Video, Award, User, Menu, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from 'next/link'

export default function LearningResourceHub() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Book className="h-6 w-6" />
            <span className="font-bold">Learning Resource Hub</span>
          </Link>
          <div className="flex items-center space-x-4 ml-auto">
            <Link href="/courses" className="text-sm font-medium transition-colors hover:text-primary">
              Courses
            </Link>
            <Link href="/topics" className="text-sm font-medium transition-colors hover:text-primary">
              Topics
            </Link>
            <Link href="/community" className="text-sm font-medium transition-colors hover:text-primary">
              Community
            </Link>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-b from-background to-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Discover Your Learning Path
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                Access high-quality educational resources tailored to your interests and goals.
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1" placeholder="Search courses, topics..." type="search" />
                <Button type="submit">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Featured Courses</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Introduction to AI", description: "Learn the basics of Artificial Intelligence", progress: 33, instructor: "Dr. Smith" },
              { title: "Web Development Bootcamp", description: "Master modern web technologies", progress: 67, instructor: "Jane Doe" },
              { title: "Data Science Fundamentals", description: "Explore the world of data analysis", progress: 50, instructor: "Prof. Johnson" }
            ].map((course, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-video relative bg-muted rounded-md overflow-hidden">
                    <Video className="absolute inset-0 h-full w-full text-muted-foreground p-8" />
                  </div>
                  <Progress value={course.progress} className="mt-4" />
                  <p className="text-sm text-muted-foreground mt-2">{100 - course.progress}% left to complete</p>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <div className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage alt="Instructor" src={`/placeholder-avatar-${i + 1}.jpg`} />
                      <AvatarFallback>{course.instructor.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <span className="text-sm font-medium">{course.instructor}</span>
                  </div>
                  <Button variant="outline">Continue</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Personalized Recommendations */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Recommended for You</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Machine Learning Basics", description: "Understand core ML concepts", icon: Book },
              { title: "Advanced JavaScript", description: "Master modern JS techniques", icon: Book },
              { title: "UX Design Principles", description: "Create user-centric designs", icon: Book },
              { title: "Blockchain Fundamentals", description: "Explore decentralized tech", icon: Book }
            ].map((course, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="aspect-square relative bg-muted rounded-md overflow-hidden">
                    <course.icon className="absolute inset-0 h-full w-full text-muted-foreground p-8" />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Start Learning</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">Join Our Community</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "AI Ethics Discussion", description: "Join the conversation on AI ethics", members: 1200 },
              { title: "Web Dev Meetup", description: "Connect with fellow developers", members: 3500 },
              { title: "Data Science Network", description: "Share insights and opportunities", members: 2800 }
            ].map((group, i) => (
              <Card key={i}>
                <CardHeader>
                  <CardTitle>{group.title}</CardTitle>
                  <CardDescription>{group.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center space-x-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">{group.members.toLocaleString()} members</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">Join Group</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-center">What Our Learners Say</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              { name: "Jane Doe", role: "Data Scientist", testimonial: "The Learning Resource Hub has been instrumental in advancing my career in data science. The quality of content and the community support are unparalleled." },
              { name: "John Smith", role: "Software Engineer", testimonial: "I've tried many online learning platforms, but none compare to the depth and breadth of resources available here. It's been a game-changer for my professional development." },
              { name: "Emily Chen", role: "UX Designer", testimonial: "The interdisciplinary approach of the Learning Resource Hub has helped me bridge the gap between design and technology. It's an invaluable resource for any UX professional." }
            ].map((testimonial, i) => (
              <Card key={i}>
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <Avatar>
                      <AvatarImage alt={testimonial.name} src={`/placeholder-avatar-${i + 4}.jpg`} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div>
                      <CardTitle>{testimonial.name}</CardTitle>
                      <CardDescription>{testimonial.role}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">"{testimonial.testimonial}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Ready to Start Learning?</h2>
              <p className="mx-auto max-w-[700px] text-primary-foreground/80 md:text-xl">
                Join thousands of learners and start your journey today.
              </p>
            </div>
            <div className="space-x-4">
              <Button variant="secondary" size="lg">
                Get Started
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <Book className="h-6 w-6" />
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              Built by the Learning Resource Hub team. The source code is available on GitHub.
            </p>
          </div>
          <div className="flex gap-4">
            <Link href="/terms" className="text-sm text-muted-foreground underline-offset-4 hover:underline">Terms</Link>
            <Link href="/privacy" className="text-sm text-muted-foreground underline-offset-4 hover:underline">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
