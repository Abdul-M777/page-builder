<template>
  <header class="bg-yellow-700 text-white relative w-full">
    <div class="container mx-auto p-2">
      <div class="group">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <a class="text-lg font-medium mr-2" href="#">
              <img
                ms-edit-image=""
                src="https://assets.garmoth.com/items/1.png"
                alt=""
                style="max-height: 100px"
              />
            </a>
            <div>
              <ul ms-menu-line="" class="flex">
                <li ms-menu-item="" class="relative group">
                  <a id="forside" class="px-3 py-2 font-medium text-sm" href="#"
                    >Forside</a
                  >
                </li>
                <li ms-menu-item="" class="relative group">
                  <a
                    id="produkter"
                    class="px-3 py-2 font-medium text-sm"
                    href="#"
                    >Produkter</a
                  >
                </li>
                <li ms-menu-item="" class="relative group">
                  <a id="udsalg" class="px-3 py-2 font-medium text-sm" href="#"
                    >UDSALG</a
                  >
                </li>
                <li ms-menu-item="" class="relative group">
                  <a id="omOs" class="px-3 py-2 font-medium text-sm" href="#"
                    >Om os</a
                  >
                </li>
              </ul>
            </div>
          </div>
          <div class="flex items-center">
            <a href="#" class="p-2"><i class="fas fa-search"></i></a>
            <a href="#" class="p-2"><i class="fas fa-shopping-cart"></i></a>
            <a href="#" class="p-2"><i class="fas fa-user"></i></a>
          </div>
        </div>
        <nav
          class="w-full hidden group-hover:block absolute left-0 right-0 top-auto z-30 p-4 bg-gray-800"
        >
          <div class="grid grid-cols-3 gap-4">
            <div class="p-4">
              <h3 class="text-xl mb-2 px-2">Header 1</h3>
              <ul ms-menu-dropdown="">
                <li ms-menu-item="" class="px-2 py-1 relative group">
                  <a class="px-3 py-2 font-medium text-sm" href="/200"
                    >Menu 3</a
                  >
                </li>
                <li ms-menu-item="" class="px-2 py-1 relative group">
                  <a class="px-3 py-2 font-medium text-sm" href="/category-2"
                    >123</a
                  >
                </li>
                <li ms-menu-item="" class="px-2 py-1 relative group">
                  <a class="px-3 py-2 font-medium text-sm" href="/"
                    >HOME AND GO</a
                  >
                </li>
              </ul>
            </div>
            <div class="p-4">
              <h3 class="text-xl mb-2 px-2">Header 2</h3>
              <ul ms-menu-dropdown="">
                <li ms-menu-item="" class="px-2 py-1 relative group">
                  <a class="px-3 py-2 font-medium text-sm" href="#">Menu 1</a>
                </li>
                <li ms-menu-item="" class="px-2 py-1 relative group">
                  <a class="px-3 py-2 font-medium text-sm" href="#">Menu 2</a>
                </li>
                <li ms-menu-item="" class="px-2 py-1 relative group">
                  <a class="px-3 py-2 font-medium text-sm" href="#">Menu 3</a>
                </li>
              </ul>
            </div>
            <div class="p-4">
              <h3 class="text-xl mb-2 px-2">Header 3</h3>
              <ul ms-menu-dropdown="">
                <li ms-menu-item="" class="px-2 py-1 relative group">
                  <a class="px-3 py-2 font-medium text-sm" href="#">Menu 1</a>
                </li>
                <li ms-menu-item="" class="px-2 py-1 relative group">
                  <a class="px-3 py-2 font-medium text-sm" href="#">Menu 2</a>
                </li>
                <li ms-menu-item="" class="px-2 py-1 relative group">
                  <a class="px-3 py-2 font-medium text-sm" href="#">Menu 3</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </header>
</template>
