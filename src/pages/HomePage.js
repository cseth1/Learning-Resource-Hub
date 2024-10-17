import React from 'react';
import { Search, Book, Video, User } from 'lucide-react';
import Button from '../components/button';
import Input from '../components/input';
import Progress from '../components/progress';
import Avatar from '../components/Avatar';
import Card from '../components/card';
import Link from 'next/link';

export default function HomePage() {  // Updated the component name
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-14 items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Book className="h-6 w-6" />
            <span className="font-bold">Learning Resource Hub</span>
          </Link>
          <div className="ml-auto flex items-center space-x-4">
            <Link href="/courses" className="text-sm font-medium hover:text-primary">Courses</Link>
            <Link href="/topics" className="text-sm font-medium hover:text-primary">Topics</Link>
            <Link href="/community" className="text-sm font-medium hover:text-primary">Community</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-24 bg-gradient-to-b from-background to-muted">
        <div className="container px-6 text-center">
          <h1 className="text-5xl font-bold">Discover Your Learning Path</h1>
          <p className="max-w-lg mx-auto mt-4 text-muted-foreground">Access high-quality educational resources tailored to your interests and goals.</p>
          <div className="mt-6 max-w-md mx-auto">
            <form className="flex space-x-2">
              <Input className="flex-1" placeholder="Search courses, topics..." type="search" />
              <Button type="submit">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 bg-muted">
        <div className="container px-6">
          <h2 className="text-4xl font-bold">Featured Courses</h2>
          <div className="grid gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
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
                  <div className="aspect-video bg-muted rounded-md">
                    <Video className="h-full w-full text-muted-foreground p-8" />
                  </div>
                  <Progress value={course.progress} className="mt-4" />
                  <p className="mt-2 text-sm text-muted-foreground">{100 - course.progress}% left to complete</p>
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

      {/* Footer */}
      <footer className="border-t py-6">
        <div className="container flex justify-between">
          <div className="flex items-center">
            <Book className="h-6 w-6" />
            <p className="ml-2 text-sm">Built by the Learning Resource Hub team. Source code available on GitHub.</p>
          </div>
          <div className="flex space-x-4">
            <Link href="/terms" className="text-sm underline hover:no-underline">Terms</Link>
            <Link href="/privacy" className="text-sm underline hover:no-underline">Privacy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
