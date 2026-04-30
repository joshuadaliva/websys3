exports.showDocumentManagement = (req, res) => {
  const documents = [
    {
      id: "DOC-1001",
      category: "Application Documents",
      fileName: "application-form-juan-dela-cruz.pdf",
      owner: "Juan Dela Cruz",
      relatedTo: "New Stall Application",
      uploadedAt: "2026-04-27 09:18 AM",
      type: "PDF",
      size: "1.2 MB",
      status: "Verified",
    },
    {
      id: "DOC-1002",
      category: "Vendor Documents",
      fileName: "vendor-contract-stall-21.pdf",
      owner: "Maria Santos",
      relatedTo: "Contract Renewal",
      uploadedAt: "2026-04-28 01:42 PM",
      type: "PDF",
      size: "980 KB",
      status: "Pending",
    },
    {
      id: "DOC-1003",
      category: "OR Documentation Storage",
      fileName: "or-2026-0849.jpg",
      owner: "Collector - Joshua Daliva",
      relatedTo: "Official Receipt OR-2026-0849",
      uploadedAt: "2026-04-29 04:06 PM",
      type: "JPG",
      size: "420 KB",
      status: "Verified",
    },
  ];

  res.render("pages/admin/document-management", { documents });
};
