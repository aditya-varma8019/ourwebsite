import { getClient } from "../configs/mail.config.js";

/**
 * Sends an email receipt for the given order.
 * @param order - The order for which the receipt is being sent.
 */
export const sendEmailReceipt = async function(vendorObj) {
    const mailClient = getClient();

    mailClient.messages
        .create(process.env.MAIL_DOMAIN, {
            from: 'orders@vnit.com',
            to: vendorObj.email,
            // to: userEmail,
            // to: 'mdshoaibansari0307@gmail.com',
            subject: `Order Requiremnet`,
            html: getReceiptHtml(vendorObj),
        })
        .then(msg => console.log(msg)) // logs response data
        .catch(err => console.log(err)); // logs any error
};

const getReceiptHtml = function (vendorObj) {
  return `
  <html>
    <head>
      <style>
      table {
        border-collapse: collapse;
        max-width:35rem;
        width: 100%;
      }
      th, td{
        text-align: left;
        padding: 8px;
      }
      th{
        border-bottom: 1px solid #dddddd;
      }
      </style>
    </head>
    <body>
      <h1>Vendor Requirement Request</h1>
      <p>Dear Vendor,</p>
      <p>Thank you for registering as a vendor.</p>
      <h2>Vendor Details</h2>
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Category</th>
            <th>Item Description</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${vendorObj.email}</td>
            <td>${vendorObj.category}</td>
            <td>${vendorObj.itemDescription}</td>
            <td>${vendorObj.price}</td>
          </tr>
        </tbody>
      </table>
    </body>
  </html>`;
  };
