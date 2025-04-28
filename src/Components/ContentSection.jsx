import React from "react";
const ContentSection = () => {
  return (
    <>
      <section className='bg-white dark:bg-gray-900'>
        <div className='max-w-screen-xl px-4 py-16 mx-auto space-y-12 lg:py-20 lg:px-6'>
          <div className='text-center'>
            <h2 className='text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white'>
              The Story Behind the App
            </h2>
            <p className='mt-2 text-lg text-gray-500 dark:text-gray-400'>
              Born at Hackathon 2025. Built for the students of Sukkur IBA.
            </p>
          </div>

          <div className='items-center gap-16 lg:grid lg:grid-cols-2'>
            <div className='text-gray-600 dark:text-gray-400'>
              <h3 className='mb-4 text-2xl font-bold text-gray-900 dark:text-white'>
                We Know the Struggle. We Built the Solution
              </h3>
              <p className='mb-4'>
                We’re a team of students from Sukkur IBA who’ve experienced the
                stress of last-minute exams, missing notes, and scattered study
                resources. So we built a community-powered platform where
                students can upload, explore, and download documents freely
                while earning credit and climbing the leaderboard.
              </p>
              <p className='mb-4'>
                We didn’t reinvent the wheel just made it roll smoother. Fast,
                clean, and fair: upload notes, earn credits, and compete for
                monthly rewards.
              </p>

              <blockquote className='p-4 italic border-l-4 border-blue-500 dark:border-blue-400 bg-gray-100 dark:bg-gray-800 rounded'>
                “Notes are meant to be shared, not hoarded.” – Our Team
              </blockquote>

              <div className='mt-8 space-y-4'>
                <h4 className='text-xl font-semibold text-gray-900 dark:text-white'>
                  Meet the Team
                </h4>
                <div className='grid grid-cols-1 gap-4 sm:grid-cols-3'>
                  <div className='flex flex-col items-center text-center'>
                    <img
                      className='w-24  h-24 mb-2 rounded-full'
                      src='/irf.jpg'
                      alt='Irfan'
                    />
                    <p className='font-medium text-gray-900 dark:text-white'>
                      Irfan Saeed
                    </p>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                      Full Stack Dev 💻
                    </p>
                  </div>
                  <div className='flex flex-col items-center text-center'>
                    <img
                      className='w-24  h-24 mb-2 rounded-full'
                      src='/amir.jpg'
                      alt='Aamir'
                    />
                    <p className='font-medium text-gray-900 dark:text-white'>
                      Aamir Hussain
                    </p>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                      UI/UX Designer 🎨
                    </p>
                  </div>
                  <div className='flex flex-col items-center text-center'>
                    <img
                      className='w-24  h-24 mb-2 rounded-full'
                      src='/ab.jpg'
                      alt='Abou Bakar'
                    />
                    <p className='font-medium text-gray-900 dark:text-white'>
                      Abou Bakar Arisar
                    </p>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                      Backend & Auth 🔐
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className='grid grid-cols-2 gap-4 mt-8 lg:mt-0'>
              <img
                className='w-full rounded-lg'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png'
                alt='office content 1'
              />
              <img
                className='w-full mt-4 rounded-lg lg:mt-10'
                src='https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png'
                alt='office content 2'
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContentSection;
