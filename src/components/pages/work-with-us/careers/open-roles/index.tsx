import { fetchOpenRolesCatalog } from './fetch-open-roles-catalog';
import OpenRolesInteractive from './OpenRolesInteractive';
import OpenRolesSection from './OpenRolesSection';
import { OpenRolesProvider } from './open-roles-provider';

export default async function OpenRoles() {
  const catalog = await fetchOpenRolesCatalog();

  return (
    <OpenRolesProvider catalog={catalog}>
      <OpenRolesSection>
        <OpenRolesInteractive />
      </OpenRolesSection>
    </OpenRolesProvider>
  );
}
