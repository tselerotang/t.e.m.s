'use client'

import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Heart, Palette, BookOpen, Users } from 'lucide-react'

export function StudentLifePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Student Life</h1>
          <p className="text-xl">Discover the vibrant community and enriching experiences at Thetsane.</p>
        </div>
      </section>

      {/* Activities Overview */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-blue-800">Life Beyond Academics</h2>
              <p className="mb-4">At Thetsane English Medium School, we believe in nurturing well-rounded individuals through a rich variety of extracurricular activities and programs.</p>
              <p className="mb-4">Our students have opportunities to explore their interests, develop new skills, and build lasting friendships through various clubs, sports, and cultural activities.</p>
              <Button variant="outline">View Calendar of Events</Button>
            </div>
            <div>
              <Image
                src="https://images.unsplash.com/photo-1529686342540-1b43aec0df75"
                alt="Students participating in activities"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Student Activities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="mr-2 text-blue-600" />
                  Sports
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Soccer</li>
                  <li>Basketball</li>
                  <li>Athletics</li>
                  <li>Netball</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Palette className="mr-2 text-blue-600" />
                  Arts & Culture
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Drama Club</li>
                  <li>Choir</li>
                  <li>Art Club</li>
                  <li>Cultural Dance</li>
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="mr-2 text-blue-600" />
                  Academic Clubs
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>Debate Club</li>
                  <li>Science Club</li>
                  <li>Math Olympiad</li>
                  <li>Book Club</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Student Leadership */}
      <section className="py-12 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Student Leadership</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="mr-2 text-blue-600" />
                  Student Council
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Our student council plays a vital role in school governance and organizing student activities. Members develop leadership skills while representing their peers.</p>
                <Button variant="outline">Learn About Elections</Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Heart className="mr-2 text-blue-600" />
                  Community Service
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Students engage in various community service projects, developing social responsibility and making a positive impact in our community.</p>
                <Button variant="outline">View Projects</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Student Life Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Image
              src="https://images.unsplash.com/photo-1491295794274-8f85adf01ecb"
              alt="Sports activities"
              width={300}
              height={300}
              className="rounded-lg shadow-lg w-full h-[200px] object-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1526285759904-71d1170ed2ac"
              alt="Arts performance"
              width={300}
              height={300}
              className="rounded-lg shadow-lg w-full h-[200px] object-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1511632765486-a01980e01a18"
              alt="Community service"
              width={300}
              height={300}
              className="rounded-lg shadow-lg w-full h-[200px] object-cover"
            />
            <Image
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644"
              alt="Academic activities"
              width={300}
              height={300}
              className="rounded-lg shadow-lg w-full h-[200px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-700 text-white py-12">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Get Involved!</h2>
          <p className="mb-8">Join our vibrant community and make the most of your school experience.</p>
          <Button size="lg" variant="secondary">View Activities Calendar</Button>
        </div>
      </section>
    </div>
  )
} 