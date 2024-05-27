# Prakhar Verma - 9920102113 - ASSIGNMENT - Super Six Sports Gaming Pvt Ltd

## Project overview

This is a React application that allows users to upload and view CSV files in a tabular format. It provides several features to enhance the user experience and make it easier to navigate through large datasets with full efficiency.

## Features

1. **File Upload**: Users can upload CSV files by clicking the "Upload CSV" button or dragging and dropping the file into the designated area.

2. **Data Preview**: After uploading a file, the application displays the CSV data in a tabular format. The table includes columns for various fields such as Email, Name, Credit Score, Credit Lines, and Phone Number.

3. **Pagination**: To handle large datasets, the application implements pagination. Users can specify the number of rows to display per page using the `Rows per page` input field. The application displays the current page range (e.g., "*Showing 1 to 100 of 1000 entries*") to provide context about the displayed data.

4. **Pagination Controls**: Users can navigate through the pages using the pagination controls at the bottom of the table. The controls include previous and next buttons, allowing users to move back and forth between pages.

5. **Loading Progress**: During the file upload process, the application displays a progress bar to provide visual feedback on the upload status.

6. **Responsive Design**: The table and other components are designed to be responsive, ensuring a seamless experience across different screen sizes and devices.

7. **Dark Mode Toggle**: The application includes a toggle button to switch between light and dark modes, catering to user preferences.

## Technologies Used

- React.js
- React Hooks (useState, useEffect)
- Papaparse.js (for parsing CSV files)
- Tailwind CSS (for styling)
- Shadcn/ui (UI component library)

## Getting Started

To run the application locally, follow these steps:

1. Clone the repository: `git clone https://github.com/pro-khar/supersix_proj.git`
3. Install dependencies: `npm install` or `npm i`
4. Start the development server: `npm run dev`
5. Open the application in your browser at `http://localhost:5173`

## Contributing

Contributions are welcome! If you find any issues or want to add new features, please open an issue or submit a pull request.
