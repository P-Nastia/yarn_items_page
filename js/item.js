﻿

const loadItems = (path, manufacturer) => {
    axios.get(path)
        .then(resp => {
            const { data } = resp;

            const items_list = document.getElementById("items_list");
            data.forEach(item => {
                if (manufacturer == "all" || manufacturer == item.manufacturer) {
                    items_list.innerHTML += `
                <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                    <div class="h-56 w-full">
                        <a href="#">
                            <img class="mx-auto h-full dark:hidden" src="${item.photo}">
                        </a>
                    </div>

                    <div class="pt-6">

                        <div class="good-title">
                            <a href="#" class="text-lg font-semibold leading-tight text-gray-900 hover:underline ">${item.title}</a>
                        </div>
                        
                        <ul class="mt-2 flex items-center gap-4">
                            <li class="flex items-center gap-2">
                                <svg class="h-4 w-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"></path>
                                </svg>
                                <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Shipping Today</p>
                            </li>

                            <li class="flex items-center gap-2">
                                <svg class="h-4 w-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M8 7V6c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1h-1M3 18v-7c0-.6.4-1 1-1h11c.6 0 1 .4 1 1v7c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1Zm8-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
                                </svg>
                                <p class="text-sm font-medium text-gray-500">Best Price</p>
                            </li>
                        </ul>

                        <div class="mt-4 flex items-center gap-3">
                            <p class="text-2xl font-extrabold leading-tight text-gray-900 dark:text-white">${item.price}</p>
                            <p class="line-through text-lg font-semibold leading-tight text-gray-900 ">${item.oldPrice}</p>
                            
                        </div>
                        <div class="mt-4 flex items-center">
                            <button style="cursor: pointer; background: rosybrown" type="button" class="back inline-flex items-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 ">
                                <svg class="-ms-2 me-2 h-5 w-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6"></path>
                                </svg>
                                Add to cart
                            </button>
                        </div>
                    </div>
                </div>
                `;
                }
            });
        });
}
