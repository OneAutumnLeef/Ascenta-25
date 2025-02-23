import Papa from 'papaparse';

export interface ProjectSubmission {
  submissionId: string;
  productName: string;
  description: string;
  teamMembers: {
    name: string;
    email: string;
    phone: string;
    year: string;
  }[];
  videoLink: string;
}

export async function parseProjectSubmissions(filePath: string): Promise<ProjectSubmission[]> {
  const response = await fetch(filePath);
  const csvText = await response.text();
  
  const { data } = Papa.parse(csvText, { header: true });
  
  return data.map((row: any) => ({
    submissionId: row['Submission ID'],
    productName: row['Product Name'],
    description: row['Prototype/Product Description'],
    teamMembers: [
      {
        name: row['Name (1)'],
        email: row['Email address'],
        phone: row['Phone number (1)'],
        year: row['Year of Program (1)']
      },
      {
        name: row['Name (3)'],
        email: row['Email Address (2)'],
        phone: row['Phone number (2)'],
        year: row['Year of Program (2)']
      },
      {
        name: row['Name (2)'],
        email: row['Email Address (1)'],
        phone: row['Phone Number'],
        year: row['Year of Program (2)']
      },
      
    ].filter(member => member.name),
    videoLink: row['Please insert your YouTube video link:']
  }));
}