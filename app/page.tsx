import Image from "next/image";
import { app } from "@/lib/firebase";
import { getAuth, setPersistence, browserLocalPersistence } from "firebase/auth";
import Link from "next/link";
import { Auth } from "firebase/auth/cordova";
import Card from "@/ui/components/Card";
import { IconUserCircle, IconServer } from "@tabler/icons-react";

export default function Home(): React.ReactElement {
  const auth: Auth = getAuth(app);
  // setPersistence(auth, browserLocalPersistence) Local user persistence

  return (
    <>
      {/* Main Wrapper */}
      <main className="w-full p-8 flex flex-col gap-4 bg-[url(../public/splash.png)] bg-[length:30rem_30rem] sm:bg-auto bg-[right_top_4rem] bg-no-repeat min-h-screen justify-center md:justify-normal items-center md:items-start">
        {/* Introduction Section */}
        <section className="w-5/6 md:w-1/2 max-w-lg mx-8 flex flex-col items-center justify-center md:justify-normal text-center md:text-left gap-12 min-h-screen animate-fadeIn">
          <div className="text-4xl sm:text-5xl font-extrabold">Superchat</div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
            eaque perspiciatis facilis eos voluptate quidem minima quisquam, id
            deserunt nesciunt consequuntur autem recusandae corrupti maiores
            debitis neque magnam. Ducimus, ratione?
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque,
            eaque perspiciatis facilis eos voluptate quidem minima quisquam, id
            deserunt nesciunt consequuntur autem recusandae corrupti maiores
            debitis neque magnam. Ducimus, ratione?
          </div>
          <Link
            href="/login"
            className="transition-colors text-2xl w-2/5 min-w-[12rem] sm:min-w-[16rem] rounded-md sm:rounded-lg bg-indigo-900 hover:bg-indigo-600 text-white px-2 py-6 group text-center relative cursor-pointer"
          >
            <div>
              <div>Home</div>
              <div className="transition-all absolute right-4 group-hover:right-2 bottom-1/2 translate-y-1/2">
                &gt;
              </div>
            </div>
          </Link>
        </section>
        {/* Stuff Section */}
        <section className="grid grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-3 md:grid-rows-2 w-[90%] mx-auto gap-6">
          <Card>
            <IconUserCircle size="4rem" />
            <div className="text-xl">Title 1</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              corrupti autem voluptas quia, quibusdam mollitia debitis.
            </div>
          </Card>
          <Card className="md:col-span-2">
            <IconServer size="4rem" />
            <div className="text-xl">Title 2</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              corrupti autem voluptas quia, quibusdam mollitia debitis,
              consequuntur quo eligendi voluptatem dicta magni iure, maiores
              ullam facere ipsa nobis? A, ea.
            </div>
          </Card>
          <Card className="md:col-span-2">
            <IconServer size="4rem" />
            <div className="text-xl">Title 3</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              corrupti autem voluptas quia, quibusdam mollitia debitis,
              consequuntur quo eligendi voluptatem dicta magni iure, maiores
              ullam facere ipsa nobis? A, ea.
            </div>
          </Card>
          <Card>
            <IconUserCircle size="4rem" />
            <div className="text-xl">Title 4</div>
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
              corrupti autem voluptas quia, quibusdam mollitia debitis.
            </div>
          </Card>
        </section>
      </main>
    </>
  );
}
