import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function ProfilPageSkinSectionPagination() {
  return (
    <Stack spacing={2}>
      <Pagination count={999} variant="outlined" shape="rounded" />
    </Stack>
  );
}
