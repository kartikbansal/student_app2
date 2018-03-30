export interface Student {
  id: string,
  fullName: string,
  score: string
}

export interface StudentNameUpdate {
  id: string,
  fullName: string
}

export interface StudentScoreUpdate {
  id: string,
  score: string
}

export interface StoreState {
  students: Student[];
}