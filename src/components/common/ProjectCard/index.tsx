import React from 'react';
import Link from 'next/link';
import Button from '@/components/common/Button';
import SaveOffLight from '/public/icons/save_off_light.svg';
import Add from '/public/icons/add.svg';

export default function ProjectCard() {
  const handleClickSave = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('click save');
  };
  return (
    <Link href={`/project/1`} aria-labelledby="title">
      <article className="flex h-[19rem] w-[26rem] flex-col justify-between rounded-[1rem] border-[0.2rem] border-green-40 p-12">
        <div className="flex flex-col gap-16">
          <div className="flex flex-wrap justify-between gap-[1.3rem]">
            <h5 className="font-18 w-[19.5rem] break-all font-bold text-gray-90" id="title">
              This is title.
            </h5>
            <button type="button" onClick={handleClickSave}>
              <SaveOffLight role="img" aria-label="Save button" />
            </button>
          </div>
          <ul className="flex flex-wrap gap-4">
            {['React', 'Typescript', 'Spring', 'Figma'].map((skill) => (
              <li key={skill}>
                <Button tabIndex={-1} type="secondary" paddingX="px-12" paddingY="py-4">
                  {skill}
                </Button>
              </li>
            ))}
            <li className="flex items-center px-[0.5rem]">
              <Add />
            </li>
          </ul>
        </div>
        <div className="flex gap-16">
          <span className="font-12 text-gray-80 ">Candidate Status</span>
          <span className="font-12 font-medium text-green-40">{2 + '/' + 4}</span>
        </div>
      </article>
    </Link>
  );
}
