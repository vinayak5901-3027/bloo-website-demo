import {
  Database, Shield, Search, Brain, Bot, Gauge, Lock, Layers, Activity, Zap,
  Clock, Cloud, Server, Workflow, Eye, FileCheck, Users, Network, GitBranch,
  TriangleAlert, Scale, Globe, Cpu, Terminal, BarChart3, Bell, Key, RefreshCw,
  Check, Building2, Heart, Factory, ShoppingCart, Radio, Fingerprint, Telescope,
  History, Sparkles, Plug, Compass, List, Mail, Briefcase, Handshake, BookOpen,
  type LucideIcon,
} from 'lucide-react';
import type { IconName } from '@/data/types';

const registry: Record<IconName, LucideIcon> = {
  database: Database, shield: Shield, search: Search, brain: Brain, bot: Bot,
  gauge: Gauge, lock: Lock, layers: Layers, activity: Activity, zap: Zap,
  clock: Clock, cloud: Cloud, server: Server, workflow: Workflow, eye: Eye,
  fileCheck: FileCheck, users: Users, network: Network, gitBranch: GitBranch,
  alertTriangle: TriangleAlert, scale: Scale, globe: Globe, cpu: Cpu,
  terminal: Terminal, barChart: BarChart3, bell: Bell, key: Key, refresh: RefreshCw,
  check: Check, building: Building2, heart: Heart, factory: Factory,
  cart: ShoppingCart, radio: Radio, fingerprint: Fingerprint, telescope: Telescope,
  history: History, sparkles: Sparkles, plug: Plug, compass: Compass, list: List,
  mail: Mail, briefcase: Briefcase, handshake: Handshake, book: BookOpen,
};

export function Icon({
  name,
  className,
  size = 24,
  strokeWidth = 1.75,
}: {
  name: IconName;
  className?: string;
  size?: number;
  strokeWidth?: number;
}) {
  const Cmp = registry[name] ?? Shield;
  return <Cmp className={className} size={size} strokeWidth={strokeWidth} aria-hidden="true" />;
}
