export let getLogs = (req: any, res: any) => {
  try {
    res.status(201).json({
      message: "getLogs()",
    });
  } catch (error) {
    res.status(500).json({ message: "getLogs Failed" });
  }
};
