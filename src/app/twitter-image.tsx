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
          // src="https://medusa.yogateria.com.br/images/logo-yogateria-black.png"
          src="https://ik.imagekit.io/p99x3nxgz/tsc%20cartificate.jpg?updatedAt=1696594450480"
          alt="Yogateria"
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
