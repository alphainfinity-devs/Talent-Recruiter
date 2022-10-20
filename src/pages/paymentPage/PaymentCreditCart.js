import React, { useState } from 'react';
import Cards from 'react-credit-cards'
import 'react-credit-cards/es/styles-compiled.css'
import {
    formatCreditCardNumber,
    formatCVC,
    formatExpirationDate
} from './PaymentCardUtlis.js'
const PaymentCreditCart = () => {
    const [number, setNumber] = useState('');

    const [name, setName] = useState('');

    const [expiry, setExpiry] = useState('');

    const [cvc, setCvc] = useState('');

    const [focus, setFocus] = useState('');
    return (
        // <section class="text-gray-600 body-font overflow-hidden">

        // </section>
        <div className='min-h-screen bg-base-200'>
            <div class="container px-5 py-24 mx-auto">
                <div class="lg:w-full mx-auto flex flex-wrap items-center">
                    <Cards

                        cvc={cvc}

                        expiry={expiry}

                        focused={focus}

                        name={name}

                        number={number}

                    />
                    <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 class="text-sm title-font text-gray-500 tracking-widest mb-2">Requriter name</h2>
                        <h1 class="text-gray-900 text-3xl title-font font-medium mb-4">Pay $10 for [Job title] make it Featured </h1>
                        <form>

                            <div class="relative z-0 mb-6 w-full group">
                                <input type="tel" format={formatCreditCardNumber} name="number" val={number}
                                    pattern="[\d| ]{16,22}"
                                    id="card_number" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                    onChange={e => setNumber(e.target.value)}

                                    onFocus={e => setFocus(e.target.name)}
                                    required />
                                <label for="card_number" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Card Number</label>
                            </div>
                            <div class="relative z-0 mb-6 w-full group">
                                <input type="tel" name="name" val={name} id="card_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                    onChange={e => setName(e.target.value)}

                                    onFocus={e => setFocus(e.target.name)}
                                    required />
                                <label for="card_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Name</label>
                            </div>
                            <div class="grid md:grid-cols-3 md:gap-6">
                                <div class="relative z-0 mb-6 w-full group">
                                    <input type="tel" name="expiry" val={expiry} format={formatExpirationDate} id="card_expiry" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                        onChange={e => setExpiry(e.target.value)}

                                        onFocus={e => setFocus(e.target.name)}
                                        required />
                                    <label for="card_expiry" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Expiry date</label>
                                </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <input type="tel" name="cvc" val={cvc}
                                        format={formatCVC} id="card_cvc" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                        onChange={e => setCvc(e.target.value)}

                                        onFocus={e => setFocus(e.target.name)}
                                        required />
                                    <label for="card_cvc" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Cvc</label>
                                </div>
                                <div class="relative z-0 mb-6 w-full group">
                                    <input type="tel" name="Amount"
                                        id="card_amount" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" "
                                        required />
                                    <label for="card_amount" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Amount</label>
                                </div>
                            </div>


                            <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pay</button>
                        </form>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default PaymentCreditCart;