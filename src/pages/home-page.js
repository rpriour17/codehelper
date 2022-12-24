import SideBar from '../common/SideBar';
export default function HomePage() {

  return (
    <div id="home-page">
    <div>
    <SideBar />
    </div>
    <div>
            <h1 class="text-4xl font-bold tracking-tight sm:text-right sm:text-6xl">Data to enrich your online business</h1>
            <p class="mt-6 text-lg leading-8 text-gray-600 sm:text-center">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</p>
            <div class="mt-8 flex gap-x-4 sm:justify-center">
              <a href="#" class="inline-block rounded-lg bg-indigo-600 px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-indigo-600 hover:bg-indigo-700 hover:ring-indigo-700">
                Get started
                <span class="text-indigo-200" aria-hidden="true">&rarr;</span>
              </a>
              <a href="#" class="inline-block rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Live demo
                <span class="text-gray-400" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
    </div>
  );
}