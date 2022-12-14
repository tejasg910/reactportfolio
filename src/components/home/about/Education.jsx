import React from 'react'

const Education = () => {
    return (
        <div>

            <div class="flex w-[100vw] overflow-auto  flex-col justify-center items-center text-white">
                <div class=" sm:-mx-6  lg:-mx-8">
                    <div class="py-2  sm:px-6 lg:px-8">
                        <div class="">
                            <table class=" ">
                                <thead class="border-b">
                                    <tr>

                                        <th scope="col" class="text-sm font-medium  px-6 py-4 text-left">

                                            Education
                                        </th>
                                        <th scope="col" class="text-sm font-medium  px-6 py-4 text-left">
                                            Information
                                        </th>

                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b">
                                        <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                            University
                                        </td>
                                        <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                            Dr. Babasaheb Ambedkar University
                                        </td>

                                    </tr>
                                    <tr class=" border-b">
                                        <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                            Department
                                        </td>
                                        <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                            Computer Science
                                        </td>

                                    </tr>
                                    <tr class=" border-b">
                                        <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">

                                            Completion
                                        </td>
                                        <td class="text-sm  font-light px-6 py-4 whitespace-nowrap">
                                            2023
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Education
