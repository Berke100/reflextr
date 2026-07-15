export default function ClubMap({ address }: { address: string }) {
  const query = encodeURIComponent(address);

  return (
    <div className="w-full h-64 border border-white/10 overflow-hidden mt-2">
      <iframe
        title="Kulüp Konumu"
        src={`https://www.google.com/maps?q=${query}&output=embed`}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}