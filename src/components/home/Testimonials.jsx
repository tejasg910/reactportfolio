import React, { useEffect } from 'react'
import { CgProfile } from 'react-icons/cg';

const Testimonials = () => {

    return (
        <div>

            <div class="relative pt-24 pb-32 overflow-hidden">
                <img class="absolute top-0 left-0" src="flaro-assets/images/testimonials/gradient.svg" alt="" />
                <img class="absolute bottom-0 right-0" src="flaro-assets/images/testimonials/gradient2.svg" alt="" />
                <div class="relative z-10 container px-4 mx-auto">
                    <h2 class="mb-16 text-4xl font-bold text-white  tracking-px-n leading-tight">Reviews</h2>
                    <div class="flex flex-wrap -m-3">
                        <div class="w-full md:w-1/2 lg:w-1/3 p-3">
                            <div class="p-6 h-full bg-white shadow-md rounded-sm border rounded-4xl">
                                <div class="flex flex-col justify-between h-full">
                                    <div class="mb-5 block">
                                        <div class="flex flex-wrap mb-4 -m-2">
                                            <div class="w-auto p-2">

                                                <CgProfile className='text-2xl' />                                            </div>
                                            <div class="w-auto p-2">
                                                <h3 class="font-semibold leading-normal">Jacob Jones</h3>
                                                <p class="text-gray-500 uppercase">@brooklysim</p>
                                            </div>
                                        </div>
                                        <p class="text-lg font-medium">If you haven&rsquo;t tried out Flaro App yet, I would definitely recommend it for both designers and developers &#x1F919;&#x1F3FB;</p>
                                    </div>
                                    <div class="block">
                                        <p class="text-sm text-gray-500 font-medium">3 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/3 p-3">
                            <div class="p-6 h-full bg-white shadow-md rounded-sm border rounded-4xl">
                                <div class="flex flex-col justify-between h-full">
                                    <div class="mb-5 block">
                                        <div class="flex flex-wrap mb-4 -m-2">
                                            <div class="w-auto p-2">

                                                <CgProfile className='text-2xl' />
                                            </div>
                                            <div class="w-auto p-2">
                                                <h3 class="font-semibold leading-normal">Wade Warren</h3>
                                                <p class="text-gray-500 uppercase">@brooklysim</p>
                                            </div>
                                        </div>
                                        <p class="text-lg font-medium">If you are thinking of a design partner to help you convert more customers, Flaro is a great choice.</p>
                                    </div>
                                    <div class="block">
                                        <p class="text-sm text-gray-500 font-medium">3 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/3 p-3">
                            <div class="p-6 h-full bg-white shadow-md rounded-sm border rounded-4xl">
                                <div class="flex flex-col justify-between h-full">
                                    <div class="mb-5 block">
                                        <div class="flex flex-wrap mb-4 -m-2">
                                            <div class="w-auto p-2">

                                                <CgProfile className='text-2xl' />
                                            </div>
                                            <div class="w-auto p-2">
                                                <h3 class="font-semibold leading-normal">Bessie Cooper</h3>
                                                <p class="text-gray-500 uppercase">@brooklysim</p>
                                            </div>
                                        </div>
                                        <p class="text-lg font-medium">We have built a few web apps using Flaro. It saves us a lot of time, because we don&apos;t have to build design features from scratch.</p>
                                    </div>
                                    <div class="block">
                                        <p class="text-sm text-gray-500 font-medium">3 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/3 p-3">
                            <div class="p-6 h-full bg-white shadow-md rounded-sm border rounded-4xl">
                                <div class="flex flex-col justify-between h-full">
                                    <div class="mb-5 block">
                                        <div class="flex flex-wrap mb-4 -m-2">
                                            <div class="w-auto p-2">

                                                <CgProfile className='text-2xl' />
                                            </div>
                                            <div class="w-auto p-2">
                                                <h3 class="font-semibold leading-normal">Esther Howard</h3>
                                                <p class="text-gray-500 uppercase">@brooklysim</p>
                                            </div>
                                        </div>
                                        <p class="text-lg font-medium">Wrike is great to make work visible and collaborative. People can pass tasks off as they complete their parts, allowing you to see the flow of work.</p>
                                    </div>
                                    <div class="block">
                                        <p class="text-sm text-gray-500 font-medium">3 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/3 p-3">
                            <div class="p-6 h-full bg-white shadow-md rounded-sm border rounded-4xl">
                                <div class="flex flex-col justify-between h-full">
                                    <div class="mb-5 block">
                                        <div class="flex flex-wrap mb-4 -m-2">
                                            <div class="w-auto p-2">

                                                <CgProfile className='text-2xl' />
                                            </div>
                                            <div class="w-auto p-2">
                                                <h3 class="font-semibold leading-normal">Albert Flores</h3>
                                                <p class="text-gray-500 uppercase">@brooklysim</p>
                                            </div>
                                        </div>
                                        <p class="text-lg font-medium">Ease of use and efficiency of design tools. The ability for the integrated marketing team to see all aspects of a project.</p>
                                    </div>
                                    <div class="block">
                                        <p class="text-sm text-gray-500 font-medium">3 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 lg:w-1/3 p-3">
                            <div class="p-6 h-full bg-white shadow-md rounded-sm border rounded-4xl">
                                <div class="flex flex-col justify-between h-full">
                                    <div class="mb-5 block">
                                        <div class="flex flex-wrap mb-4 -m-2">
                                            <div class="w-auto p-2">

                                                <CgProfile className='text-2xl' />
                                            </div>
                                            <div class="w-auto p-2">
                                                <h3 class="font-semibold leading-normal">Jerome Bell</h3>
                                                <p class="text-gray-500 uppercase">@brooklysim</p>
                                            </div>
                                        </div>
                                        <p class="text-lg font-medium">Very very easy for customer information to get secured if all orders are on one device.</p>
                                    </div>
                                    <div class="block">
                                        <p class="text-sm text-gray-500 font-medium">3 days ago</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}

export default Testimonials
