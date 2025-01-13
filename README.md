PROJECT SET UP  
------------------------------------------
1. create folder using :
    --npx create-react-app school_fend
    --cd school_fend

2.  install nexcessary dependices
     -- npm install axios react-router-dom react-icons react-router and so on.

3. Run :
   npm install
   npm start

(In my project, when the backend code is run on a server (e.g., http://localhost:3000/api/transactions), 
 in that case only the data values from the database table are displayed)   
_____________________________________________________________________________________

DETAILED DOC FOR EACH PAGE
------------------------------------------
Dashboard Pages
1. Transactions Overview
    -Description: Displays a paginated and searchable list of all transactions.
    -API Used: /transactions
    -Features:
    -Columns: collect_id, school_id, gateway, order_amount, custom_order_id
    -Status filter: Dropdown to filter by gateway (PHONEPE,CASH).
    -Date filter: Date range picker to filter transactions by date.
    -Navigation: Accessible from the main menu.
2. Transaction Details by School
   - Description: Shows transactions for a specific school_id.
    -API Used: /transactions?school_id=<id>
    Features:
    -Search bar/dropdown to select a specific school_id.
    -Displays transaction details similar to the Transactions Overview page.
    =Navigation: Accessible from the main menu or search bar.
3. Transaction Status Check
    -Description: Allows users to input a custom_order_id to check the transaction status.
    -API Used: /check-status
    Features:
    -Input field for custom_order_id.
    =Displays the transaction status (e.g., Success, Pending, Failed).
    -Navigation: Available as a modal or a dedicated page

 ______________________________________________________________________________________________________________________

 IMAGES

 ------------------------------------------------------------------------------------------------

 img 1:  https://postimg.cc/nMztJRzh
 img2 : https://postimg.cc/kB26Bvjn
 img 3 : https://postimg.cc/dZdbxXss
 img 4: https://postimg.cc/NLkqm3zD
   .
   
