export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'instructor' | 'admin';
  avatar: string;
  xp: number;
  level: number;
  badges: string[];
  bio?: string;
  education?: string;
  address?: string;
  mobile?: string;
  experience?: string;
}

export interface Review {
  id: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  rating: number; // 1 to 5
  comment: string;
  timestamp: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  category: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  instructor: {
    id: string;
    name: string;
    avatar: string;
  };
  thumbnail: string;
  rating: number;
  price: number;
  enrolledStudents: number;
  whatYoullLearn: string[];
  requirements: string[];
  sections: CourseSection[];
  reviews?: Review[];
}

export interface CourseSection {
  id: string;
  title: string;
  lessons: Lesson[];
}

export type Lesson = VideoLesson | QuizLesson | CodingChallengeLesson;

interface BaseLesson {
  id: string;
  title: string;
  type: 'video' | 'quiz' | 'challenge';
}

export interface VideoLesson extends BaseLesson {
  type: 'video';
  duration: number; // in minutes
  videoUrl: string;
  resources: { name: string; url: string }[];
}

export interface QuizLesson extends BaseLesson {
  type: 'quiz';
  quizId: string;
}

export interface CodingChallengeLesson extends BaseLesson {
  type: 'challenge';
  challengeId: string;
}

export interface Quiz {
  id: string;
  title: string;
  questions: QuizQuestion[];
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number; // index of the correct option
}

export interface CodingChallenge {
  id: string;
  title: string;
  problemStatement: string;
  defaultCode: { [language: string]: string };
  hints: string[];
  solution: { [language: string]: string };
}

export interface ForumPost {
  id: string;
  title: string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  content: string;
  upvotes: number;
  repliesCount: number;
  timestamp: string;
  isSolution?: boolean;
}

export interface ForumReply {
  id:string;
  author: {
    id: string;
    name: string;
    avatar: string;
  };
  content: string;
  upvotes: number;
  timestamp: string;
  isSolution?: boolean;
}

export interface UserProgress {
  [courseId: string]: {
    completedLessons: string[];
  };
}