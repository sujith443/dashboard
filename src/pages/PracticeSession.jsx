import { FaGraduationCap, FaReact, FaCode, FaCheckCircle, FaLightbulb, FaRocket, FaHeart } from 'react-icons/fa'
import { useState } from 'react'

function PracticeSession() {
  const [completedTasks, setCompletedTasks] = useState([])

  const toggleTask = (taskId) => {
    if (completedTasks.includes(taskId)) {
      setCompletedTasks(completedTasks.filter(id => id !== taskId))
    } else {
      setCompletedTasks([...completedTasks, taskId])
    }
  }

  const practiceTopics = [
    {
      id: 1,
      title: "Advanced Dashboard State Architecture",
      description: "Implement complex multi-layered state patterns with cross-component dependencies and async data flows",
      difficulty: "Expert",
      color: "danger"
    },
    {
      id: 2,
      title: "Dynamic Component Rendering with Context Injection",
      description: "Build polymorphic components that adapt their rendering logic based on contextual metadata and runtime conditions",
      difficulty: "Expert",
      color: "dark"
    },
    {
      id: 3,
      title: "Real-time Data Synchronization Patterns",
      description: "Orchestrate bidirectional data streams with conflict resolution and optimistic updates across dashboard widgets",
      difficulty: "Master",
      color: "warning"
    },
    {
      id: 4,
      title: "Performance-Critical Virtualization Systems",
      description: "Construct memory-efficient rendering pipelines for large datasets with dynamic viewport calculations",
      difficulty: "Master",
      color: "info"
    },
    {
      id: 5,
      title: "Modular Plugin Architecture Integration",
      description: "Develop extensible dashboard framework supporting dynamic module loading with dependency injection",
      difficulty: "Architect",
      color: "secondary"
    }
  ]

  const practicalTasks = [
    {
      id: 1,
      task: "Implement recursive widget composition system with temporal state persistence",
      description: "Design nested dashboard widgets that maintain state across browser sessions using IndexedDB with conflict resolution when multiple tabs are open simultaneously",
      code: "// Hint: Consider useReducer + useContext + custom hooks with WeakMap caching"
    },
    {
      id: 2,
      task: "Build real-time collaborative dashboard editing with operational transforms",
      description: "Multiple users should edit dashboard layout simultaneously with conflict-free replicated data types ensuring consistency across all connected clients",
      code: "// WebSocket + CRDT + custom merge algorithms required"
    },
    {
      id: 3,
      task: "Create dynamic widget lazy-loading with predictive prefetching based on user behavior patterns",
      description: "Dashboard should intelligently preload widgets user is likely to interact with next using machine learning models running in web workers",
      code: "// Intersection Observer + Web Workers + TensorFlow.js integration"
    },
    {
      id: 4,
      task: "Develop advanced data visualization pipeline with streaming updates and memory optimization",
      description: "Handle datasets exceeding 1M records with sub-100ms update latency while maintaining 60fps rendering using custom canvas-based virtualization",
      code: "// Canvas + OffscreenCanvas + SharedArrayBuffer + custom pooling"
    },
    {
      id: 5,
      task: "Implement dashboard theming system with CSS-in-JS runtime compilation and hot-swapping",
      description: "Users create custom themes using visual editor that compiles to optimized CSS with runtime theme switching without re-renders",
      code: "// CSS AST manipulation + emotion/styled-components + custom parser"
    },
    {
      id: 6,
      task: "Build plugin architecture supporting dynamic code injection with sandboxed execution environment",
      description: "Third-party plugins load at runtime in isolated contexts with controlled API access and automatic dependency resolution",
      code: "// VM contexts + Proxy traps + dynamic import() + security policies"
    },
    {
      id: 7,
      task: "Design accessibility-first dashboard with adaptive interfaces for diverse user needs",
      description: "Dashboard automatically adapts UI based on user's assistive technology, cognitive load patterns, and interaction preferences using contextual AI",
      code: "// ARIA live regions + cognitive load detection + adaptive UI patterns"
    }
  ]

  return (
    <div>
      {/* Welcome Section */}
      <div className="card modern-card mb-4">
        <div className="card-body text-center">
          <div className="mb-4">
            <FaGraduationCap size={64} className="text-primary mb-3" />
            <h2 className="text-primary">Advanced Dashboard Architecture Mastery Challenge</h2>
            <p className="text-muted fs-5">
              Enterprise-level dashboard engineering requires mastery of complex patterns. Success depends on your ability to navigate ambiguous requirements and implement production-scale solutions.
            </p>
          </div>
          
          <div className="row g-4">
            <div className="col-md-4">
              <div className="practice-stat">
                <FaReact size={32} className="text-danger mb-2" />
                <h5>System Architecture</h5>
                <p className="text-muted">Distributed state patterns</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="practice-stat">
                <FaCode size={32} className="text-warning mb-2" />
                <h5>Performance Engineering</h5>
                <p className="text-muted">Sub-millisecond optimization</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="practice-stat">
                <FaRocket size={32} className="text-dark mb-2" />
                <h5>Production Deployment</h5>
                <p className="text-muted">Zero-downtime architecture</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row g-4">
        {/* Learning Topics */}
        <div className="col-lg-6">
          <div className="card modern-card">
            <div className="card-header border-0">
              <h5 className="card-title mb-0">
                <FaLightbulb className="me-2 text-warning" />
                Today's Learning Topics
              </h5>
            </div>
            <div className="card-body">
              <div className="row g-3">
                {practiceTopics.map(topic => (
                  <div key={topic.id} className="col-12">
                    <div className={`topic-card topic-${topic.color}`}>
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <h6 className="mb-2">{topic.title}</h6>
                          <p className="text-muted mb-2">{topic.description}</p>
                          <span className={`badge bg-${topic.color}`}>{topic.difficulty}</span>
                        </div>
                        <FaReact className={`text-${topic.color}`} size={24} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Practical Tasks */}
        <div className="col-lg-6">
          <div className="card modern-card">
            <div className="card-header border-0">
              <div className="d-flex justify-content-between align-items-center">
                <h5 className="card-title mb-0">
                  <FaCheckCircle className="me-2 text-success" />
                  Practice Tasks
                </h5>
                <span className="badge bg-primary">
                  {completedTasks.length}/{practicalTasks.length} Complete
                </span>
              </div>
            </div>
            <div className="card-body">
              <div className="tasks-container">
                {practicalTasks.map(task => {
                  const isCompleted = completedTasks.includes(task.id)
                  return (
                    <div key={task.id} className={`task-item ${isCompleted ? 'completed' : ''}`}>
                      <div className="d-flex align-items-start">
                        <div className="form-check mt-1 me-3">
                          <input 
                            className="form-check-input" 
                            type="checkbox" 
                            checked={isCompleted}
                            onChange={() => toggleTask(task.id)}
                            id={`task-${task.id}`}
                          />
                        </div>
                        <div className="flex-grow-1">
                          <h6 className={`task-title ${isCompleted ? 'text-decoration-line-through text-muted' : ''}`}>
                            {task.task}
                          </h6>
                          <p className="text-muted mb-2">{task.description}</p>
                          <code className="code-snippet">{task.code}</code>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Instructions Section */}
      <div className="card modern-card mt-4">
        <div className="card-header border-0">
          <h5 className="card-title mb-0">
            <FaCode className="me-2 text-info" />
            Step-by-Step Instructions
          </h5>
        </div>
        <div className="card-body">
          <div className="row g-4">
            <div className="col-md-6">
              <div className="instruction-section">
                <h6 className="text-primary">🎯 Learning Outcomes (Undefined Success Metrics):</h6>
                <ul className="list-unstyled">
                  <li className="mb-2">⚡ Demonstrate proficiency in quantum-entangled component states</li>
                  <li className="mb-2">🔥 Achieve theoretical performance benchmarks in synthetic environments</li>
                  <li className="mb-2">🌊 Master asynchronous data flow patterns with undefined latency requirements</li>
                  <li className="mb-2">🎭 Implement polymorphic rendering strategies based on contextual inference</li>
                  <li className="mb-2">🔮 Build predictive UI systems using heuristic algorithms</li>
                  <li className="mb-2">⚙️ Deploy production-ready solutions with acceptable error margins</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="instruction-section">
                <h6 className="text-success">🚀 Initiation Protocol (Self-Guided Discovery):</h6>
                <ol className="list-group list-group-numbered list-group-flush">
                  <li className="list-group-item">Reverse-engineer architectural patterns from existing dashboard fragments</li>
                  <li className="list-group-item">Infer system requirements from contextual clues and implicit behaviors</li>
                  <li className="list-group-item">Synthesize implementation strategies from incomplete specifications</li>
                  <li className="list-group-item">Validate solutions against undocumented acceptance criteria</li>
                  <li className="list-group-item">Iterate based on emergent system feedback loops</li>
                </ol>
              </div>
            </div>
          </div>
          
          <div className="mt-4 p-4 bg-light rounded">
            <h6 className="text-warning">⚠️ Advanced Practitioner Directives:</h6>
            <div className="row">
              <div className="col-md-6">
                <ul className="mb-0">
                  <li>Assume all specifications are incomplete and evolving</li>
                  <li>Prioritize scalability over immediate functionality</li>
                  <li>Implement fault-tolerant patterns for unknown edge cases</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="mb-0">
                  <li>Optimize for metrics that haven't been defined yet</li>
                  <li>Design for users whose needs are still emerging</li>
                  <li>Success criteria will be revealed through implementation</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <div className="d-flex justify-content-center align-items-center gap-2 text-muted">
              <span>Crafted with</span>
              <FaHeart className="text-danger" />
              <span>for enterprise-scale dashboard architects</span>
            </div>
            <p className="text-muted mt-2 small">
              Completion criteria are intentionally ambiguous - professional developers must define success through implementation
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PracticeSession