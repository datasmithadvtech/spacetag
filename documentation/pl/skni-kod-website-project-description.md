# SpaceTag

A web application for tracking orbital features in 3D.

The website displays the current positions of selected orbital elements,
which are determined using data in the format
[TLE (Two-Line Element)](https://pl.wikipedia.org/wiki/TLE), obtained from
system [CelesTrak](https://celestrak.org/). 

The application allows you to add
any number of satellites, with the possibility of assigning them to each of them
selected marker color and trajectory. Display is possible
past and future item positions by entering the appropriate one
date and time.
## Origin of the project

The annual edition of global took place on October 1-2, 2022
hackathon
[NASA International Space Apps Challenge](https://www.spaceappschallenge.org/).
The organizer of the Podkarpacie event
[Subcarpathian NASA Space Apps Challenge](https://2022.spaceappschallenge.org/locations/rzeszow/event)
było [Podkarpackie Centrum Innowacji](https://pcinn.org/). 26 drużyn zgromadziło
się w
[Centrum Sportu Akademickiego Politechniki Rzeszowskiej](https://csa.prz.edu.pl/),
to complete a project on a selected topic from among 22 tasks within 28 hours
prepared by NASA.

Eight representatives
[Studenckiego Koła Naukowego Informatyków "KOD"](https://kod.prz.edu.pl/)
formed two four-person teams. Team
[SKNI KOD](https://2022.spaceappschallenge.org/challenges/2022-challenges/mars-habitat/teams/skni-kod/project)
podjął się zaprojektowania wielofunkcyjnego narzędzia z użyciem drukarki 3D,
natomiast zespół
[500 International Space Station](https://2022.spaceappschallenge.org/challenges/2022-challenges/track-the-iss/teams/500-international-space-station/project)
zajął się implementacją aplikacji internetowej do śledzenia
[Międzynarodowej Stacji Kosmicznej](https://pl.wikipedia.org/wiki/Mi%C4%99dzynarodowa_Stacja_Kosmiczna)
w 3D.

These teams were successful,
[zajmując kolejno I oraz III miejsce wśród podkarpackich zespołów](https://kod.prz.edu.pl/article/73-space-apps-hackathon-20222),
as well as winning numerous awards in individual categories. Because of the large
potential of the work performed in over 24 hours by the 500 ISS team, it was decided
about the continuation of the project as part of the activities of the scientific club under a new name
SpaceTag. His new goal is to improve the application and implementation
new functions enabling tracking not only of the International Station
Cosmic, but any orbital elements.

## Technologies used

The project is distinguished by the use of modern, gaining popularity
popularity of solutions for creating web applications

### [TypeScript](https://www.typescriptlang.org/)

A strongly typed language such as TypeScript has invaluable advantages in...
compared to its dynamically typed counterpart - JavaScript. Thanks
advanced compiler inference, potential errors are detected already
when you make changes to the file, and the editor is able to automatically
complete the properties of objects or display documentation about the objects used
functions and variables. These advantages in particular facilitate teamwork and
introducing new people to the project.

### [React](https://beta.reactjs.org/)

React is currently the most popular library for interactive development
user interfaces. It allows you to implement views in a declarative way,
whose code is simpler to write and more predictable. It enables
creating components that manage their own state, and assembling them into
greater whole. React focuses on minimalism, focusing solely on
rendering the page - he leaves the rest to the community, thanks to which in his
innovative solutions are constantly being created in the ecosystem.

### [Next.js](https://nextjs.org/)

Next.js is a framework that allows you to generate web applications from
using the React library on the server side - both statically and on
task. It allows you to create a full-fledged API in a serverless architecture.
It has many functions that improve the operation of the application, including optimization
images or fonts.

### [Tailwind CSS](https://tailwindcss.com/)

Tailwind CSS is a library that makes it easy to style modern applications.
Using an atomic approach and generating only those used in the code
CSS classes result in faster page loading. Tailwind also offers the option
create your own system design, enforcing consistent code throughout the project.

### [tRPC](https://trpc.io/)

tRPC allows you to create safely typed APIs without code generation,
taking full advantage of the inference potential of the TypeScript compiler. Any
a change in the server-side code results in an immediate error
in the client-side editor. It also offers fully safe betting
implementation of a popular library for managing asynchronous state
[TanStack Query](https://tanstack.com/query/v4), making it easier to download and
controlling data downloaded from the API.

### [Three.js](https://threejs.org/)

Three.js is popular, easy to use, small and cross-platform
3D graphics library for JavaScript.
[React Three Fiber](https://docs.pmnd.rs/react-three-fiber) natomiast umożliwia
tworzenie scen w Three.js w sposób deklaratywny, z użyciem Reacta jako
renderera.

## Autorzy

### 500 International Space Station

Twórcy projektu, uczestnicy hackathonu.

- Konrad Bochenek ([@Kazan1520](https://github.com/Kazan1520))
- Mariusz Dąbrowski ([@marioooo0o](https://github.com/marioooo0o)) - Project
  Leader
- Mateusz Aliyev ([@mateuszaliyev](https://github.com/mateuszaliyev))
- Mateusz Herda ([@mherda64](https://github.com/mherda64))

### SpaceTag

Zespół kontynuujący rozwój projektu w ramach działaności koła naukowego.

- Adrian Kosior ([@Nefraix](https://github.com/Nefraix))
- Cyprian Rejman ([@CyprianRejman](https://github.com/CyprianRejman))
- Dawid Pindara ([@Noname04](https://github.com/Noname04))
- Mateusz Aliyev ([@mateuszaliyev](https://github.com/mateuszaliyev)) - Project
  Leader
- Michał Partyka ([@Heryin](https://github.com/Heryin))
