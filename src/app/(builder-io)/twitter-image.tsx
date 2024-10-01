import { ImageResponse } from "next/og";

export const size = {
  width: 500,
  height: 500,
};
export const contentType = "image/png";
export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 128,
          background: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img
          src="https://res.cloudinary.com/dxjq1hfxx/image/upload/v1711713695/aucologo_7935c94f0d.png"
          alt="Yogateria"
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
