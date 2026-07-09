import AccuracyStat from './AccuracyStat';
import CodeSnippet from './CodeSnippet';
import ProjectsDelivered from './ProjectsDelivered';
import RetentionRate from './RetentionRate';

export default function FloatingObjects() {
  return (
    <>
      <CodeSnippet />
      <RetentionRate />
      <ProjectsDelivered />
      <AccuracyStat />
    </>
  );
}
