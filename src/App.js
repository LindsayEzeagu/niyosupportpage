import React from 'react';
import Support from './support/Support';


function App() {
  const supportInfo= [
    {
        key: 121,
        icon:"img/121.png",
        title:"Scholarship",
        description: "This means that you will never have to worry about paying a penny to learn a new skill. Our partners have ensured that you are able to upskill at the comfort of your home with no cost to you."
      },

      { key: 122,
        icon:"img/122.png",
        title:"Free Counselling Session",
        description: "Every student has access to a number of wellbeing and counselling sessions with our partners at frontline therapists."
      },
      { key: 123,
        icon:"img/123.png",
        title:"Childcare Support",
        description: "Every mum on our bootcamps is eligible to apply to receive up to £250 in childcare vouchers as a way of supporting you whilst learning."
      },

      { key: 124,
        icon:"img/124.png",
        title:"4.75/5 Average Reviews",
        description: "We are focused on ensuring every student has the best experience our bootcamps have to offer."
      },
      { key: 125,
        icon:"img/125.png",
        title:"75% Employment Rate",
        description: "This is from our 2020 outcomes. Our students have been able to go on to work at some awesome organisations from junior to senior levels."
      },
      { key: 126,
        icon:"img/126.png",
        title:"560 people Upskilled",
        description: "Since 2020, we have upskilled 560 to start a career in tech and progress into more senior roles in tech in companies like Northrop Grumman, Zappi, KPMG and many more"
      },
      { key: 127,
        icon:"img/127.png",
        title:"Dedicated Career Support from Day One",
        description: "You will have Hannah, our employability and career coach here to support you from your first day. She will help you with your LinkedIn, CV and also interview coaching."
      },
      { key: 128,
        icon:"img/128.png",
        title:"Exclusive Access to Open Roles to All Our Hiring Partners",
        description: "Exclusive access to open roles to all our hiring partners."
      },
      { key: 129,
        icon:"img/129.png",
        title:"Cool Rewards",
        description: "We like to reward our students during really important milestones. All our rewards come with an element of surprise."
      },
      { key: 130,
        icon:"img/130.png",
        title:"Empowerment Evenings and Events",
        description: "Free access to empowerment workshops and events by men and women who are excelling in their careers and businesses."
      },
      { key: 131,
        icon:"img/131.png",
        title:"7000+ Community of talents",
        description: "We’ve grown an organic community of 7000 people who are passionate about tech and the intersections of it with other industries."
      }
  ];

  return (
    <div>
      <h1>react assignment</h1>
      <Support supportInfo={supportInfo}></Support>
    </div>
  )
}


export default App;
