import { jsPDF } from "jspdf";

export const generatePDF = (form: any) => {
    // Generate pdf with jsPDF with form values
    const doc = new jsPDF();
    doc.setFont("courier");

    // Top Left Part
    doc.setFontSize(9);
    doc.text(form.addr_1, 10, 10);
    doc.text(form.addr_2, 10, 13);
    doc.text(form.addr_3, 10, 16);
    // END OF Top Left Part

    // Top Right Part
    // doc.setFontSize(12);
    // doc.text("Add Logo Here", 170, 13);
    // END OF Top Right Part

    // Receipt Text
    doc.setFontSize(15)
    doc.text("Receipt", 10, 25);
    // END OF Receipt Text

    // Issuance Date
    doc.setFontSize(9)
    doc.text(`Issue Date: ${new Date().toLocaleDateString()}`, 10, 30);
    // END OF Issuance Date

    // Passengers
    doc.setFontSize(9)
    doc.text(`Passenger(s): ${form.name}`, 10, 33);
    // END OF Passengers

    // Flight Information
    doc.setLineWidth(10)
    doc.setDrawColor(200, 200, 195)
    doc.line(10, 40, 200, 40)

    doc.setFontSize(12);
    doc.text("Flight Information", 12, 41);

    doc.setFontSize(10);
    doc.text("Booking No", 12, 51);
    doc.text(form.booking_id, 150, 51);

    doc.text("Airline", 12, 61);
    doc.text(form.airline, 150, 61);

    doc.text("Plane No", 12, 71);
    doc.text(form.plane_no, 150, 71);

    // Payment Confirmation Section
    doc.setLineWidth(10)
    doc.setDrawColor(200, 200, 195)
    doc.line(10, 70, 200, 70)

    doc.setFontSize(12);
    doc.text("Payment Confirmation", 12, 71);

    doc.setFontSize(10);

    doc.text("Name", 12, 81);
    doc.text(form.payment_name, 150, 81);

    doc.text("Billing Address", 12, 91);
    doc.text(form.billing_address, 150, 91);

    doc.text("Email Address", 12, 101);
    doc.text(form.pay_email, 150, 101);

    doc.text("Payment Method", 12, 111);
    doc.text(form.pay_method, 150, 111);
    // END OF Payment Confirmation Section

    // Price Inf Section
    doc.setLineWidth(10)
    doc.setDrawColor(200, 200, 195)
    doc.line(10, 130, 200, 130)

    doc.setFontSize(12);
    doc.text("Price Details", 12, 131);

    doc.setFontSize(10);

    doc.text("Base Fare", 12, 141);
    doc.text(`PHP ${form.base_fare}`, 150, 141);

    doc.text("Taxes and Fees", 12, 151);
    doc.text(`PHP ${(parseFloat(form.base_fare)*.12).toString()}`, 150, 151);

    doc.text("Total Charge", 12, 161);
    doc.text(`PHP ${parseFloat(form.base_fare)+(parseFloat(form.base_fare)*.12)}`, 150, 161);
    // END OF Payment Confirmation Section

    doc.text("This receipt is automatically generated, no signature is required.", 10, 180)

    // doc.text(`Name: ${form.name}`, 10, 40);
    // doc.text(`Email: ${form.email}`, 10, 50);
    // doc.text(`Destination: ${form.destination}`, 10, 60);
    // doc.text(`Travelers: ${form.travelers}`, 10, 70);

    doc.save(`${form.name}-${form.booking_id}.pdf`);
}