
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Userdashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside
        className={`pt-[30px] w-[243px] lg:pt-0 bg-gray-800 text-white h-screen fixed top-0 left-0 overflow-y-auto transition-transform transform ${
          isSidebarOpen ? 'w-[300px]' : '-translate-x-full '
        } lg:translate-x-0`}
      >
        <h1 className='pt-6 text-2xl font-bold text-center '>User Dashboard</h1>
            
            <ol className='pt-3 text-lg cursor-pointer'>
                <li className='pt-2 pb-2 pl-6 rounded-md hover:bg-green-500'>Orders</li>
                <li className='pt-4 pb-2 pl-6 rounded-md hover:bg-green-500'>Payments history</li>
                <li className='pt-4 pb-2 pl-6 rounded-md hover:bg-green-500'>Profile</li>
                <li className='pt-4 pb-2 pl-6 rounded-md hover:bg-green-500'>Notifications</li>
            </ol>
      </aside>

      {/* Main Content */}
      <div className= { `p-4 lg:ml-64 lg:md-64 lg:pl-0 w-65 sm:w-[100vw] lg:w-[cal(100vw-243px)]`}>
        <p>majid Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam incidunt cupiditate repellat nemo tenetur et? Labore obcaecati asperiores, corporis doloremque excepturi totam eius architecto perferendis rerum dicta iusto accusamus illum eos culpa fugiat placeat quibusdam cupiditate pariatur quis suscipit consequatur velit? Ratione quasi necessitatibus, non, nulla ipsum id tempore nemo ea corrupti modi eaque. Aspernatur fuga perspiciatis facere recusandae assumenda culpa facilis necessitatibus a labore aperiam deserunt tempore, omnis quae nemo voluptatem odio reprehenderit ea porro doloremque? Aspernatur, quam animi inventore eos nesciunt voluptas ratione delectus quasi harum. Ipsa aliquid itaque ipsum earum commodi sapiente voluptatem mollitia distinctio sed optio modi, soluta deleniti ad impedit nesciunt fugit quia corporis nisi blanditiis at doloremque natus officia sit beatae? Quo aliquid amet libero voluptate eveniet, cupiditate sit nisi inventore ex, enim corrupti est laudantium facilis temporibus omnis harum. Dolorum temporibus vero quia dolorem, aspernatur cum tenetur esse, dignissimos dolore reiciendis consequuntur repellat? Laudantium obcaecati nostrum quibusdam quas deleniti magni cupiditate repellat ducimus? Rem, saepe perspiciatis quisquam deleniti illum libero cumque omnis maiores tenetur? Totam facilis quia, labore ut eligendi accusamus doloremque nobis, sed voluptatibus vel assumenda et eos ipsam laudantium laboriosam aperiam odio praesentium. Minus obcaecati harum fugiat error nesciunt aspernatur voluptates, hic atque eius voluptate laudantium voluptatibus quo explicabo accusamus sit esse dicta inventore repellat. Magnam laudantium cupiditate suscipit vel architecto, et quasi voluptatem assumenda possimus labore doloribus iusto incidunt velit? Porro ducimus vitae error veritatis odio animi at illo quasi sequi debitis sed minima, aperiam earum laboriosam sapiente quos repellat eos esse nesciunt. Omnis perferendis, officia voluptate qui beatae eius, dolore aliquam officiis perspiciatis quos magni non. Velit reiciendis eius nam distinctio tempore dolorem repellat iure neque facere asperiores totam tenetur sequi quas, non laboriosam nihil iusto molestiae quia earum ullam rerum ex ea sint? Reiciendis velit nobis voluptates doloremque? Dignissimos expedita praesentium, nemo quo voluptatum veniam eaque velit, eligendi vero minus ipsum impedit quos id debitis, pariatur quidem placeat? Neque saepe maxime et magni obcaecati aut? Culpa expedita fuga modi temporibus consequuntur necessitatibus! Veritatis laborum dolor laboriosam cupiditate possimus incidunt quae ab voluptas. Nobis voluptas laudantium molestias explicabo alias expedita culpa iure similique ullam deserunt quia beatae nesciunt fuga recusandae incidunt perspiciatis aliquid reiciendis impedit voluptatum omnis natus, et, enim voluptate. Expedita delectus illum maiores eum? Ratione quod quam blanditiis dolore minus totam magnam rerum nostrum consequuntur numquam cupiditate, incidunt asperiores dolorem nam molestiae eaque sapiente enim dicta quos eligendi quasi harum voluptatem iure. Ut ullam debitis recusandae harum. Quae, atque animi necessitatibus impedit ipsa sed eligendi quis eius cumque aliquid hic fuga iusto nemo, dolor corrupti? Sunt animi debitis minima ab consequuntur illo eveniet quisquam numquam earum. Magni inventore eligendi est, maxime impedit non autem quia ab ratione aspernatur magnam repellendus nemo dolorem provident porro, rem dolore, obcaecati cupiditate quo molestiae totam! Distinctio atque veritatis animi ratione expedita id at adipisci, tempore sapiente aliquam alias provident veniam eveniet sit quos ea excepturi itaque nihil hic accusantium ab maiores odio inventore praesentium! Impedit eligendi accusamus accusantium iste quasi.</p>
      </div>

      {/* Toggle Button (Visible only on small screens) */}
      <button
        className="fixed p-2 bg-green-500 rounded lg:hidden top-4 left-4"
        onClick={toggleSidebar}
      >
       <FaBars className="text-white"/>
       
      </button>
    </div>
  );
};

export default Userdashboard;
