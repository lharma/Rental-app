"use client";
import React, { useState } from "react";

const mockUser = {
    avatar: "/images/avatar.png",
    name: "Jane Doe",
    username: "janedoe123",
    email: "jane.doe@email.com",
    phone: "+1 234 567 8901",
    address: "123 Main St, Springfield, USA",
    bio: "Passionate traveler and photographer. Love exploring new places and cultures.",
    joined: "2022-01-15",
    dob: "1990-05-20",
    gender: "Female",
    occupation: "Software Engineer",
    interests: ["Travel", "Photography", "Cooking", "Reading"],
    social: {
        twitter: "https://twitter.com/janedoe",
        linkedin: "https://linkedin.com/in/janedoe",
        instagram: "https://instagram.com/janedoe",
    },
    stats: {
        listings: 12,
        bookings: 34,
        reviews: 18,
        rating: 4.8,
    },
};

export default function UserProfilePage() {
    const [user] = useState(mockUser);

    return (
        <div className="min-h-screen w-full bg-gray-50 flex items-center justify-center">
            <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 bg-white rounded-none sm:rounded-lg shadow-none sm:shadow mt-0 sm:mt-8">
                <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                    <img
                        src={user.avatar}
                        alt="Avatar"
                        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border-4 border-blue-500 object-cover"
                    />
                    <div className="text-center sm:text-left">
                        <h2 className="text-2xl font-bold">{user.name}</h2>
                        <p className="text-gray-600">@{user.username}</p>
                        <p className="text-gray-500">{user.occupation}</p>
                        <div className="flex justify-center sm:justify-start space-x-3 mt-2">
                            {user.social.twitter && (
                                <a href={user.social.twitter} target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/twitter.svg" alt="Twitter" className="w-5 h-5" />
                                </a>
                            )}
                            {user.social.linkedin && (
                                <a href={user.social.linkedin} target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/linkedin.svg" alt="LinkedIn" className="w-5 h-5" />
                                </a>
                            )}
                            {user.social.instagram && (
                                <a href={user.social.instagram} target="_blank" rel="noopener noreferrer">
                                    <img src="/icons/instagram.svg" alt="Instagram" className="w-5 h-5" />
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Contact Information</h3>
                        <ul className="text-gray-700 space-y-1">
                            <li><strong>Email:</strong> {user.email}</li>
                            <li><strong>Phone:</strong> {user.phone}</li>
                            <li><strong>Address:</strong> {user.address}</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="font-semibold text-lg mb-2">Personal Details</h3>
                        <ul className="text-gray-700 space-y-1">
                            <li><strong>Date of Birth:</strong> {user.dob}</li>
                            <li><strong>Gender:</strong> {user.gender}</li>
                            <li><strong>Joined:</strong> {user.joined}</li>
                        </ul>
                    </div>
                </div>

                <div className="mt-6">
                    <h3 className="font-semibold text-lg mb-2">Bio</h3>
                    <p className="text-gray-700">{user.bio}</p>
                </div>

                <div className="mt-6">
                    <h3 className="font-semibold text-lg mb-2">Interests</h3>
                    <div className="flex flex-wrap gap-2">
                        {user.interests.map((interest) => (
                            <span
                                key={interest}
                                className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                            >
                                {interest}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                    <div>
                        <div className="text-xl font-bold">{user.stats.listings}</div>
                        <div className="text-gray-500 text-sm">Listings</div>
                    </div>
                    <div>
                        <div className="text-xl font-bold">{user.stats.bookings}</div>
                        <div className="text-gray-500 text-sm">Bookings</div>
                    </div>
                    <div>
                        <div className="text-xl font-bold">{user.stats.reviews}</div>
                        <div className="text-gray-500 text-sm">Reviews</div>
                    </div>
                    <div>
                        <div className="text-xl font-bold">{user.stats.rating}★</div>
                        <div className="text-gray-500 text-sm">Rating</div>
                    </div>
                </div>
            </div>
        </div>
    );
}